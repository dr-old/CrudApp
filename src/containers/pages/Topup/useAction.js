import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const topup = useSelector(state => state.generalReducer.formTopup);
  const navigation = useNavigation();
  const nominal = [
    {label: 10, value: 10000},
    {label: 50, value: 50000},
    {label: 100, value: 100000},
    {label: 150, value: 150000},
    {label: 200, value: 200000},
    {label: 500, value: 500000},
    {label: 1000, value: 1000000},
    {label: 1500, value: 1500000},
    {label: 2000, value: 2000000},
  ];

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_TOPUP', inputType: type, inputValue: value});
  };

  return {
    topup,
    navigation,
    nominal,
    onChangeText,
  };
};

export default useAction;
