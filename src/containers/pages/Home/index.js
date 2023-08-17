import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useFetchUsers} from './useFetchUsers';
import {TileArticle} from '../../../components/molecules';
import {Container} from '../../organism';
import {color} from '../../../utils/styles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {updateDetailUserData} from '../../../redux/actions/userAction';
import {helpers} from '../../../utils';
// Import other components and dependencies as needed

const Home = () => {
  const {users, loadMore, reload} = useFetchUsers();
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Container
      scrollview={false}
      loading={users.loading}
      bgColor={color.white9}
      navbar={{
        type: 'home',
        title: `${user.data?.firstName} ${user.data?.lastName}`,
        onSearch: () => console.log(1),
        onCart: () => navigation.push('EmployeeAdd'),
      }}>
      <View style={styles.container}>
        <FlatList
          data={users.users}
          renderItem={({item, index}) => (
            <TileArticle
              item={item}
              onClick={() => {
                dispatch(updateDetailUserData({}));
                navigation.push('Employee', {userId: item.id});
              }}
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
  userItem: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Home;
