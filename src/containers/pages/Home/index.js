/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ErrorMessage, TileArticle} from '../../../components/molecules';
import {Container} from '../../organism';
import {color} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {helpers} from '../../../utils';
import firestore from '@react-native-firebase/firestore';
import useNotifee from '../../../config/useNotifee';

const Home = () => {
  // const {users, loadMore, reload} = useFetchUsers();
  const {onCreateTriggerNotification} = useNotifee();
  const user = useSelector(state => state.generalReducer.user);
  const todosCollection = firestore().collection('todos');
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = todosCollection.onSnapshot(querySnapshot => {
      const newTodos = [];
      querySnapshot?.forEach(doc => {
        if (doc.data().email === user.data.email) {
          newTodos.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            reminderStartDate: doc.data().reminderStartDate,
            reminderEndDate: doc.data().reminderEndDate,
            reminderStatus: doc.data().reminderStatus,
            reminderInfo: doc.data().reminderInfo,
            email: doc.data().email,
            createdAt: doc.data().createdAt,
            updatedAt: doc.data().updatedAt,
          });
        }
      });
      const sortTodos = newTodos.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
      setTodos(sortTodos);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container
      scrollview={false}
      loading={loading}
      bgColor={color.white9}
      navbar={{
        type: 'home',
        title: `${user.data?.givenName} ${user.data?.familyName}`,
        imageProfile: `${user.data?.photo}`,
        onFavorite: () => {
          dispatch({type: 'CLEAN_FORM_TODO'});
          navigation.push('TodoForm', {data: {}, edit: false});
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
                navigation.push('TodoDetail', {data: item});
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
