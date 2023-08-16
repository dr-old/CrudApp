import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';

const TilePayment = ({item, actived, onClick}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={stylesCust.cardItem(
        actived?.id === item?.id ? color.green4 : color.green7,
      )}>
      <View style={stylesCust.cardImage}>
        <Image source={item.image} style={stylesCust.image} />
      </View>
      <View style={stylesCust.cardBody}>
        <Text style={styles.textBase(14, color.tblack, 'textSemiBold', 'none')}>
          {item.title}
        </Text>
        <Text style={styles.p4()}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  cardItem: brcolor => ({
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: color.green7,
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
    backgroundColor: color.white,
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

export default TilePayment;
