import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {color, styles} from '../../../utils/styles';
import useAction from './useAction';
import {
  BarHeader,
  LoadingIntern,
  NavHome,
  TileEmployee,
} from '../../../components/molecules';

function Home() {
  const {navigation, employees, user, items, handleLoadMore} = useAction();

  return (
    <View style={{flex: 1, backgroundColor: color.white9}}>
      <BarHeader bgcolor={color.white9} />
      <FlatList
        style={{paddingHorizontal: 30}}
        data={items}
        renderItem={({item, index}) => (
          <TileEmployee
            item={item}
            onClick={() =>
              navigation.push('Employee', {itemData: item, itemId: index + 1})
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={NavHome({
          title: `${user.data.firstName} ${user.data.lastName}`,
          onSearch: () =>
            navigation.push('Employees', {itemCategory: 'search'}),
          onCart: () => console.log(),
        })}
        ListFooterComponent={employees.loading ? <LoadingIntern /> : null}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

export default Home;
