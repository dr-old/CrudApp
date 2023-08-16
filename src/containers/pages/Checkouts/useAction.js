import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.generalReducer.transactionList);
  const navigation = useNavigation();

  return {navigation, orders};
};

export default useAction;
