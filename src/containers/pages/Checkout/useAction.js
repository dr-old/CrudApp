import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {helpers} from '../../../utils';

const useAction = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.generalReducer.transactionList);
  const form = useSelector(state => state.generalReducer.formCheckout);
  const navigation = useNavigation();

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_CHECKOUT', inputType: type, inputValue: value});
  };

  const handleCheckout = () => {
    showMessage({
      message: 'Success',
      description: 'Congratulation checkout is success!',
      type: 'success',
    });

    let finalData = orders?.length > 0 ? orders : [];
    let data = form;

    data['trxId'] = helpers.getSequence('TRX');
    data['trxDate'] = new Date().toString();
    finalData.push(data);

    dispatch({type: 'SET_TRANSACTION_LIST', data: finalData});
    dispatch({type: 'SET_CHECKOUT_CLEAN'});
    navigation.replace('Home');
  };

  return {navigation, form, onChangeText, handleCheckout};
};

export default useAction;
