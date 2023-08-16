import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';

const DetailPayment = ({type, label, value}) => {
  return (
    <View style={stylesCust.payment}>
      <Text
        style={
          type === 'total' ? styles.h4(color.green4) : styles.p4(color.tblack)
        }>
        {label}
      </Text>
      <Text
        style={
          type === 'total' ? styles.h4(color.green4) : styles.h5(color.tblack)
        }>
        {value}
      </Text>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  payment: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
});

export default DetailPayment;
