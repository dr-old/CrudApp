import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Divider} from '../../../components/atoms';
import {
  CardProduct,
  TileArticle,
  TileProduct,
} from '../../../components/molecules';
import {color} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Products({route}) {
  const {itemCategory} = route.params;
  const {
    navigation,
    products,
    isData,
    isSearch,
    activeSearch,
    handleSearch,
    handleClear,
  } = useAction();

  return (
    <Container
      bgColor={color.white9}
      navbar={{
        type: 'fixed',
        value: isSearch,
        title: itemCategory,
        onChangeText: value => handleSearch(value),
        onSearch:
          itemCategory === 'search'
            ? () => console.log()
            : activeSearch
            ? () => console.log()
            : null,
        onClear: () => handleClear(),
        onClick: () => navigation.goBack(),
      }}>
      <View style={stylesCust.card}>
        <Divider height={10} />
        {isData.length > 0 ? (
          <>
            {itemCategory !== 'others' && itemCategory !== 'search'
              ? isData
                  .filter(item => item.category === itemCategory)
                  .map((item, index) => (
                    <TileArticle
                      key={index}
                      item={item}
                      onClick={() =>
                        navigation.push('Product', {itemData: item})
                      }
                    />
                  ))
              : isData.map((item, index) => (
                  <TileArticle
                    key={index}
                    item={item}
                    onClick={() => navigation.push('Product', {itemData: item})}
                  />
                ))}
          </>
        ) : products?.data?.length > 0 ? (
          <>
            {itemCategory !== 'others' && itemCategory !== 'search'
              ? products.data
                  .filter(item => item.category === itemCategory)
                  .map((item, index) => (
                    <TileArticle
                      key={index}
                      item={item}
                      onClick={() =>
                        navigation.push('Product', {itemData: item})
                      }
                    />
                  ))
              : products.data.map((item, index) => (
                  <TileArticle
                    key={index}
                    item={item}
                    onClick={() => navigation.push('Product', {itemData: item})}
                  />
                ))}
          </>
        ) : null}
      </View>
    </Container>
  );
}

export default Products;
