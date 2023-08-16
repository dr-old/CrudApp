import moment from 'moment';
import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {helpers} from '../../utils';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';

const TilePaymentHistory = ({item, lastIdx, onClick}) => {
  const statusDate = item.TransactionDetails[lastIdx].epayTrxDate;
  const status =
    item?.TransactionDetails[lastIdx]?.epayTrxStatus === 'settlement'
      ? 'Success'
      : item.TransactionDetails[lastIdx].epayTrxStatus;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={stylesCust.cardItem(color.white)}>
      <ButtonIcon
        type="success"
        solid={true}
        name="plus-circle"
        size={25}
        disabled={true}
      />
      <View style={stylesCust.cardBody}>
        <Text style={styles.h7(color.green4)}>{status}</Text>
        <Text style={styles.h5()}>{item.remark}</Text>
        <Divider height={5} />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.p4()}>
            {helpers.formatCurrency(parseFloat(item.amount), 'Rp.')}
          </Text>
          <Text style={styles.p4()}>
            {moment(statusDate).format('DD MMM YYYY HH:mm')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  buttonType: (clr = color.tblack) => ({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: clr,
  }),
  cardItem: brcolor => ({
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: brcolor,
    borderColor: brcolor,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  }),
  image: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green7,
  },
  cardBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  cardTitle: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
});

export default TilePaymentHistory;
