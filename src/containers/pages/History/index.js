import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  RefreshControl,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
import ErrorMessage from '../../../components/molecules/ErrorMessage';
import stylesCust from './stylesCust';
import helpers from '../../../utils/helpers';
import useAction from './useAction';
import {
  LoadingExtern,
  TileOrder,
  TilePaymentHistory,
} from '../../../components/molecules';

function History() {
  const {user, navigation, transactions, isLoading} = useAction();
  console.log(transactions);
  return (
    <Container
      bgColor={color.white9}
      loading={transactions.loading}
      navbar={{
        type: 'fixed',
        title: 'Your History',
      }}>
      <View style={stylesCust.card}>
        {transactions?.dataList?.data?.length > 0 ? (
          <View>
            {transactions.dataList.data
              .sort((a, b) => a.trxDate.localeCompare(b.trxDate))
              .map((item, index) => (
                <TilePaymentHistory
                  key={index}
                  item={item}
                  lastIdx={item.TransactionDetails.length - 1}
                  onClick={() => navigation.push('Checkout', {itemData: item})}
                />
              ))}
          </View>
        ) : null}
      </View>
    </Container>
  );
}

export default History;
