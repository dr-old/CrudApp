import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import {Container} from '../../organism';
import {color, styles} from '../../../utils/styles';
import {ButtonLabel, Divider} from '../../../components/atoms';
import {DetailPayment, TilePayment} from '../../../components/molecules';
import stylesCust from './stylesCust';
import {helpers} from '../../../utils';
import useAction from './useAction';

const PaymentStatus = () => {
  const {topup, payment, navigation, onChangeText, handleConfirm} = useAction();
  return (
    <Container
      bgColor={color.white9}
      loading={payment.loading}
      navbar={{
        type: 'fixed',
        title: 'Payment Status',
        onClick: () => navigation.goBack(),
      }}
      bottom={
        <View style={stylesCust.footer}>
          <ButtonLabel
            type="success"
            solid={true}
            label="Check Status!"
            size="large"
            disabled={
              topup?.nominal > 0 && topup?.paymentMethod?.id ? false : true
            }
            onClick={() => handleConfirm()}
          />
        </View>
      }>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardTitle}>
          <Text style={styles.h5(color.tblack)}>top up amount</Text>
        </View>
        <Divider height={10} />
        <CurrencyInput
          style={styles.h1()}
          editable={false}
          value={topup?.nominal ?? 0}
          onChangeValue={value => onChangeText('nominal', value)}
          prefix="Rp."
          delimiter=","
          separator="."
          precision={0}
          onChangeText={formattedValue => {
            console.log(formattedValue);
          }}
        />
        <Divider height={1} mTop={10} mBot={10} bgColor={color.line} />
        <Text style={styles.p4(color.tblack)}>top up to main balance</Text>
        <Divider height={30} />
        <Text style={styles.h5(color.tblack)}>top up detail</Text>
        <Divider height={10} />
        <DetailPayment
          label="top up amount"
          value={helpers.formatCurrency(topup?.nominal, 'Rp.')}
        />
        <DetailPayment label="top up cost" value="Free" />
        <Divider height={1} mTop={10} mBot={10} bgColor={color.line} />
        <DetailPayment
          type="total"
          label="Total"
          value={helpers.formatCurrency(topup?.nominal, 'Rp.')}
        />
      </View>
    </Container>
  );
};

export default PaymentStatus;
