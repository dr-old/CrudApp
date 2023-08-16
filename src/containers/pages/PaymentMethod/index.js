import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Container} from '../../organism';
import {color, styles} from '../../../utils/styles';
import {ButtonLabel, Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import {helpers} from '../../../utils';
import useAction from './useAction';
import {TilePayment} from '../../../components/molecules';

const PaymentMethod = () => {
  const {topup, navigation, payment, onChangeText} = useAction();
  return (
    <Container
      bgColor={color.white9}
      navbar={{
        type: 'fixed',
        title: 'Payment Method',
        onClick: () => navigation.goBack(),
      }}
      bottom={
        <View style={stylesCust.footer}>
          <ButtonLabel
            type="success"
            solid={true}
            label="Select!"
            size="large"
            disabled={topup?.paymentMethod?.id ? false : true}
            onClick={() => navigation.goBack()}
          />
        </View>
      }>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardTitle}>
          <Text style={styles.h5(color.tblack)}>Bank Transfer</Text>
        </View>
        <Divider height={10} />
        {payment
          .filter(fill => fill.payment_type === 'bank_transfer')
          .map((item, index) => {
            return (
              <TilePayment
                key={index}
                item={item}
                actived={topup?.paymentMethod}
                onClick={() => onChangeText('paymentMethod', item)}
              />
            );
          })}
      </View>
    </Container>
  );
};

export default PaymentMethod;
