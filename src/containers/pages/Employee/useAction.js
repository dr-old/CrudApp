import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetailData} from '../../../redux/actions/productAction';

const useAction = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer);
  const favorite = useSelector(state => state.generalReducer.favoriteList);
  const cart = useSelector(state => state.generalReducer.cartList);
  const navigation = useNavigation();
  const [qty, setQty] = useState(1);

  const handleGetProduct = id => {
    const payload = {
      link: `products/${id}`,
    };
    dispatch(fetchProductDetailData(payload));
  };

  const handleFamilarProduct = () => {
    let data = [];
    if (products.data?.length > 0) {
      for (var i = 0; i < 9; i++) {
        data.push(products.data[i]);
      }
    } else {
      data = [];
    }

    return data;
  };

  const handleGetFavorite = id => {
    let data =
      favorite?.length > 0 ? favorite.find(item => item?.id === id) : false;
    return data;
  };

  const handleSetFavorite = (item, type) => {
    let data =
      favorite?.length > 0 ? favorite.filter(i => i?.id !== item.id) : [];
    if (type) {
      data.push(item);
    }
    dispatch({type: 'SET_FAVORITE_LIST', favorite: data});
  };

  const handleCart = type => {
    if (type === 'plus') {
      setQty(qty + 1);
    } else {
      setQty(qty - 1);
    }
  };

  const handleAddCart = data => {
    let finalData =
      cart?.length > 0 ? cart.filter(item => item?.id !== data.id) : [];
    let newData =
      cart?.length > 0 ? cart.find(item => item?.id === data.id) : {};
    if (newData?.id) {
      newData['qty'] = newData['qty'] + qty;
    } else {
      newData = data;
      newData['qty'] = qty;
    }
    newData['subtotal'] = parseFloat(newData['qty'] * data.price).toFixed(2);
    finalData.push(newData);
    dispatch({type: 'SET_CART_LIST', cart: finalData});
    navigation.push('Cart');
  };

  return {
    navigation,
    qty,
    products,
    handleFamilarProduct,
    handleGetFavorite,
    handleSetFavorite,
    handleCart,
    handleAddCart,
    handleGetProduct,
  };
};

export default useAction;
