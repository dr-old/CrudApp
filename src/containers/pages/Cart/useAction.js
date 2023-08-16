import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {helpers} from '../../../utils';

const useAction = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.generalReducer.cartList);
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();

  const handleUpdateCart = (data, type) => {
    let finalData =
      cart?.length > 0 ? cart.filter(item => item?.id !== data.id) : [];
    let newData =
      cart?.length > 0 ? cart.find(item => item?.id === data.id) : {};
    if (newData?.id) {
      if (type === 'plus') {
        newData['qty'] = newData['qty'] + 1;
      } else {
        newData['qty'] = newData['qty'] - 1;
      }
    }
    if (newData['qty'] >= 1) {
      newData['subtotal'] = parseFloat(newData['qty'] * data.price).toFixed(2);
      finalData.push(newData);
    }
    dispatch({type: 'SET_CART_LIST', cart: finalData});
  };

  const handleCheckout = () => {
    dispatch({
      type: 'SET_CHECKOUT',
      name: `${user.data.firstName} ${user.data.lastName}`,
      email: user.data.email,
      address: '',
      shippingCost: 0,
      discount: 0,
      total: helpers.sumArray(cart, 'subtotal'),
      detail: cart,
    });
    dispatch({type: 'SET_CART_LIST', cart: []});
    navigation.push('Checkout');
  };

  return {navigation, cart, handleUpdateCart, handleCheckout};
};

export default useAction;
