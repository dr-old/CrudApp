import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const topup = useSelector(state => state.generalReducer.formTopup);
  const navigation = useNavigation();
  const payment = [
    {
      id: 'bca',
      title: 'Bank BCA',
      subtitle: 'Virtual Account',
      payment_type: 'bank_transfer',
      image: require('../../../../assets/payment/bank_bca.jpg'),
    },
    {
      id: 'bni',
      title: 'Bank BNI',
      subtitle: 'Virtual Account',
      payment_type: 'bank_transfer',
      image: require('../../../../assets/payment/bank_bni.jpg'),
    },
    {
      id: 'bri',
      title: 'Bank BRI',
      subtitle: 'Virtual Account',
      payment_type: 'bank_transfer',
      image: require('../../../../assets/payment/bank_bri.jpg'),
    },
    {
      id: 'mandiri',
      title: 'Bank Mandiri',
      subtitle: 'Bill Payment',
      payment_type: 'bank_transfer',
      image: require('../../../../assets/payment/bank_mandiri.jpg'),
    },
    {
      id: 'permata',
      title: 'Bank Permata',
      subtitle: 'Virtual Account',
      payment_type: 'bank_transfer',
      image: require('../../../../assets/payment/bank_permata.jpg'),
    },
    {
      id: 'gopay',
      title: 'GoPay',
      subtitle: 'Barcode QRIS',
      payment_type: 'qris',
      image: require('../../../../assets/payment/bank_permata.jpg'),
    },
  ];

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_TOPUP', inputType: type, inputValue: value});
  };

  return {
    topup,
    navigation,
    payment,
    onChangeText,
  };
};

export default useAction;
