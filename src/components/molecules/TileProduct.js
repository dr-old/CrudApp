import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {helpers} from '../../utils';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';

const TileProduct = ({item, onClick, onAddCart, onMinCart, checkout}) => {
  return (
    <View style={stylesCust.cardItem}>
      <View style={stylesCust.cardImage}>
        <Image source={{uri: item.image}} style={stylesCust.image} />
      </View>
      <View style={stylesCust.cardBody}>
        <View style={stylesCust.cardTitle}>
          <Text numberOfLines={2} style={styles.h7()}>
            {item.title}
          </Text>
          <Divider height={5} />
          <Text numberOfLines={1} style={styles.p5(color.tgrey)}>
            {item.category}
          </Text>
          <Divider height={5} />
          {checkout ? (
            <View style={stylesCust.subtotal}>
              <View style={stylesCust.sum}>
                <Text style={styles.h5(color.bluep5)}>
                  {helpers.formatCurrency(item.price, '$')}
                </Text>
                <Divider width={5} />
                <Text style={styles.h7(color.tgrey)}>x {item.qty}</Text>
              </View>
              <Text style={styles.h5(color.tblack)}>
                {helpers.formatCurrency(parseFloat(item.subtotal), '$')}
              </Text>
            </View>
          ) : (
            <Text style={styles.h5(color.bluep5)}>
              {helpers.formatCurrency(item.price, '$')}
            </Text>
          )}

          {item?.qty && onAddCart && onMinCart ? (
            <View style={stylesCust.qty}>
              <ButtonIcon
                type={'primary'}
                onClick={onMinCart}
                name="minus"
                borderRadius={25}
                size={15}
              />
              <Divider width={20} />
              <Text style={styles.h3()}>{item.qty}</Text>
              <Divider width={20} />
              <ButtonIcon
                type={'primary'}
                onClick={onAddCart}
                name="plus"
                borderRadius={25}
                size={15}
              />
            </View>
          ) : null}
        </View>
        {onClick ? (
          <ButtonIcon
            type={stylesCust.buttonType(color.white, color.bluep5)}
            name="heart"
            size={20}
            borderRadius={38}
            onClick={onClick}
          />
        ) : null}
      </View>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  subtotal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sum: {flexDirection: 'row', alignItems: 'center'},
  cardList: {
    flex: 1,
  },
  cardItem: [
    {
      flex: 1,
      flexDirection: 'row',
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

export default TileProduct;
