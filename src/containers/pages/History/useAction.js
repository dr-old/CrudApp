import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {historyPaymentData} from '../../../redux/actions/paymentAction';

const useAction = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.generalReducer.user);
  const transactions = useSelector(state => state.paymentReducer);
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [isMounted, setMounted] = useState(true);

  useEffect(() => {
    if (isMounted) {
      handleGetHistory();
    }
    return () => {
      setMounted(false);
    };
  });

  const handleGetHistory = () => {
    const payload = {
      link: `transactions/history/${user.data.id}`,
    };
    dispatch(historyPaymentData(payload));
  };

  return {user, navigation, transactions, isLoading};
};

export default useAction;
