import moment from 'moment';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {helpers} from '../../utils';
import {color, styles} from '../../utils/styles';
import {Divider} from '../atoms';

const TileOrder = ({item, onClick, checkout}) => {
  return (
    <TouchableOpacity onPress={onClick} style={stylesCust.cardItem}>
      <View style={stylesCust.cardHeader}>
        <Text
          numberOfLines={2}
          style={styles.textBase(13, color.bluep5, 'textMedium', 'uppercase')}>
          {item.trxId}
        </Text>
        <Text
          numberOfLines={2}
          style={styles.textBase(13, color.tgrey, 'textMedium', 'uppercase')}>
          {moment(new Date(item.trxDate)).format('DD MMM YYYY HH:mm')}
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={stylesCust.cardImage}>
          <Image
            source={{uri: item.detail[0].image}}
            style={stylesCust.image}
          />
        </View>
        <View style={stylesCust.cardBody}>
          <View style={stylesCust.cardTitle}>
            <Text numberOfLines={2} style={styles.h7()}>
              {item.detail[0].title}
            </Text>
            <Divider height={5} />
            <Text numberOfLines={1} style={styles.p5(color.tgrey)}>
              {item.detail[0].category}
            </Text>
            <Divider height={5} />
            {checkout ? (
              <View style={stylesCust.subtotal}>
                <Text style={styles.h5(color.bluep)}>Total</Text>
                <Text style={styles.h5(color.bluep)}>
                  {helpers.formatCurrency(
                    parseFloat(item.detail[0].subtotal),
                    '$',
                  )}
                </Text>
              </View>
            ) : (
              <Text style={styles.h5(color.bluep5)}>
                {helpers.formatCurrency(item.detail[0].price, '$')}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  subtotal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sum: {flexDirection: 'row', alignItems: 'center'},
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: color.line,
    paddingBottom: 5,
    marginBottom: 10,
  },
  cardList: {
    flex: 1,
  },
  cardItem: [
    {
      flex: 1,
      marginBottom: 30,
      backgroundColor: color.white,
      borderRadius: 15,
      padding: 20,
    },
    styles.shadowCust(),
  ],
  image: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green,
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  title: [styles.h5()],
  buttonType: (
    clr = color.tblack,
    backgroundColor = 'transparent',
    borderColor = 'transparent',
  ) => ({
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: clr,
  }),
  qty: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default TileOrder;
