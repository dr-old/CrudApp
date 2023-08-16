import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {
  chargePaymentData,
  statusPaymentData,
} from '../../../redux/actions/paymentAction';
import {helpers} from '../../../utils';

const useAction = () => {
  const dispatch = useDispatch();
  const topup = useSelector(state => state.generalReducer.formTopup);
  const user = useSelector(state => state.generalReducer.user);
  const payment = useSelector(state => state.paymentReducer);
  const navigation = useNavigation();

  console.log(payment);

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_TOPUP', inputType: type, inputValue: value});
  };

  const handleConfirm = () => {
    // const payload = {
    //   link: 'transactions/charge',
    //   data: {
    //     payment_type: topup.paymentMethod.payment_type,
    //     transaction_details: {
    //       gross_amount: topup.nominal,
    //       order_id: `${helpers.getUid()}-${new Date().getTime()}`,
    //     },
    //     bank_transfer: {
    //       bank: topup.paymentMethod.id,
    //     },
    //     customer_details: {
    //       user_id: user.data.id,
    //       email: user.data.email,
    //       first_name: user.data.firstName,
    //       last_name: user.data.lastName,
    //       phone: `${user.data.phoneId + user.data.phone}`,
    //     },
    //   },
    // };
    const payload = {
      link: 'transactions/status/7e1142fe-c04d-4b0f-8e15-28eae62022aa-1677635897969',
    };
    // console.log(payload);
    // dispatch(chargePaymentData(payload));
    dispatch(statusPaymentData(payload));
    // dispatch({type: 'CLEAN_FORM_TOPUP'});
    // navigation.replace('Home');
  };

  return {
    topup,
    payment,
    navigation,
    onChangeText,
    handleConfirm,
  };
};

export default useAction;
