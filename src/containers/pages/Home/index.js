/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useFetchUsers} from './useFetchUsers';
import {ErrorMessage, TileArticle} from '../../../components/molecules';
import {Container} from '../../organism';
import {color} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {helpers} from '../../../utils';

const Home = () => {
  const {users, loadMore, reload} = useFetchUsers();
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log(user);

  return (
    <Container
      scrollview={false}
      loading={users.loading}
      bgColor={color.white9}
      navbar={{
        type: 'home',
        title: `${user.data?.givenName} ${user.data?.familyName}`,
        onFavorite: () => {
          navigation.push('EmployeeAdd');
          dispatch({type: 'USER_RESET'});
          dispatch({type: 'CLEAN_FORM_EMPLOYEE'});
        },
        onCart: () => navigation.push('Setting'),
      }}>
      <View style={styles.container}>
        {/* <Text>{users?.users?.length}</Text> */}
        <FlatList
          data={users.users}
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
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          refreshing={users.loading}
          onRefresh={reload}
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
