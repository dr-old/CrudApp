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
import stylesCust from './stylesCust';
import {helpers} from '../../../utils';
import {useSelector} from 'react-redux';
import useAction from './useAction';

const Topup = () => {
  const {topup, navigation, nominal, onChangeText} = useAction();
  return (
    <Container
      bgColor={color.white9}
      navbar={{
        type: 'fixed',
        title: 'Top Up',
        onClick: () => navigation.goBack(),
      }}
      bottom={
        <View style={stylesCust.footer}>
          <ButtonLabel
            type="success"
            solid={true}
            label="Next!"
            size="large"
            disabled={topup?.nominal > 0 ? false : true}
            onClick={() => navigation.push('TopupConfirm')}
          />
        </View>
      }>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardTitle}>
          <Text style={styles.h5(color.tblack)}>select nominal</Text>
        </View>
        <Divider height={10} />
        <View style={stylesCust.cardList}>
          {nominal.map((item, index) => (
            <TouchableOpacity
              onPress={() => onChangeText('nominal', item.value)}
              key={index}
              style={stylesCust.cardNominal(
                topup?.nominal === item.value ? color.green4 : color.green7,
              )}>
              <Text style={styles.h3()}>
                {helpers.formatCurrency(item.label, '')}K
              </Text>
              <Text style={styles.p5()}>
                {helpers.formatCurrency(item.value, 'Rp. ')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardTitle}>
          <Text style={styles.h5(color.tblack)}>Custom nominal</Text>
        </View>
        <Divider height={10} />
        <CurrencyInput
          style={styles.h1()}
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
        <Divider height={1} mTop={10} bgColor={color.line} />
      </View>
    </Container>
  );
};

export default Topup;
