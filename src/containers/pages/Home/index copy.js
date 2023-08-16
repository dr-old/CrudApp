import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Divider} from '../../../components/atoms';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {TileArticle} from '../../../components/molecules';

function HomeUs() {
  const {
    navigation,
    users,
    banner,
    category,
    user,
    page,
    setPage,
    setData,
    isData,
    isSearch,
    refreshing,
    handleRefresh,
    handleLoadMore,
  } = useAction();

  // useEffect(() => {
  //   // Update data state based on pagination
  //   if (page === 1) {
  //     setData(users.data);
  //   } else {
  //     setData([...isData, ...users.data]);
  //   }
  // }, [isData, page, setData, users]);

  return (
    <Container
      scrollview={false}
      loading={users.loading}
      bgColor={color.white9}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      // }
      // navbar={{
      //   type: 'home',
      //   title: `${user.data?.firstName} ${user.data?.lastName}`,
      //   onSearch: () => navigation.push('Products', {itemCategory: 'search'}),
      //   onCart: () => console.log(),
      // }}
    >
      <FlatList
        ListHeaderComponent={() => (
          <View style={stylesCust.card}>
            <View style={stylesCust.cardTitle}>
              <Text style={styles.h5(color.tblack)}>List Users</Text>
              <Text
                style={styles.h5(color.green4)}
                onPress={() =>
                  navigation.push('Products', {itemCategory: 'others'})
                }>
                View All
              </Text>
            </View>
            <Divider height={10} />
          </View>
        )}
        data={users?.data}
        renderItem={({item, index}) => (
          <TileArticle
            key={index}
            item={item}
            onClick={() => navigation.push('Product', {itemData: item})}
          />
        )}
        keyExtractor={item => item.id.toString()}
        // refreshing={refreshing}
        // onRefresh={handleRefresh}
        // onEndReached={handleLoadMore}
        // onEndReachedThreshold={0.1} // Adjust as needed
      />
    </Container>
  );
}

export default HomeUs;
