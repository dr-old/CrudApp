/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useFetchUsers} from './useFetchUsers';
import {ErrorMessage, TileArticle} from '../../../components/molecules';
import {Container} from '../../organism';
import {color} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {helpers} from '../../../utils';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const {users, loadMore, reload} = useFetchUsers();
  const user = useSelector(state => state.generalReducer.user);
  const todosCollection = firestore().collection('todos');
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    // Load todos from Firestore on component mount
    const unsubscribe = todosCollection.onSnapshot(querySnapshot => {
      const newTodos = [];
      querySnapshot?.forEach(doc => {
        newTodos.push({
          id: doc.id,
          text: doc.data().text,
          title: doc.data().title,
          description: doc.data().description,
          reminderDate: doc.data().reminderDate,
          reminderStatus: doc.data().reminderStatus,
          email: doc.data().email,
          createdAt: doc.data().createdAt,
          updatedAt: doc.data().updatedAt,
        });
      });
      setTodos(newTodos);
    });

    return () => unsubscribe(); // Unsubscribe from Firestore listener on unmount
  }, []);

  return (
    <Container
      scrollview={false}
      loading={users.loading}
      bgColor={color.white9}
      navbar={{
        type: 'home',
        title: `${user.data?.givenName} ${user.data?.familyName}`,
        imageProfile: `${user.data?.photo}`,
        onFavorite: () => {
          navigation.push('TodoAdd');
          dispatch({type: 'USER_RESET'});
          dispatch({type: 'CLEAN_FORM_EMPLOYEE'});
        },
        onCart: () => navigation.push('Setting'),
      }}>
      <View style={styles.container}>
        {/* <Text>{users?.users?.length}</Text> */}
        <FlatList
          data={todos}
          renderItem={({item, index}) => (
            <TileArticle
              item={item}
              onClick={() => {
                navigation.push('Employee', {userId: item.id});
              }}
            />
          )}
          ListEmptyComponent={() => (
            <ErrorMessage
              marginVertical={50}
              message="Data is not found, Please reload again!"
            />
          )}
          keyExtractor={item => `${helpers.getUid()}_${item.id.toString()}`}
          // onEndReached={loadMore}
          // onEndReachedThreshold={0.1}
          // refreshing={users.loading}
          // onRefresh={reload}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
