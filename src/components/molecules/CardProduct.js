import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import helpers from '../../utils/helpers';
import {color, styles} from '../../utils/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CardProduct = ({item, onClick, marginRight}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={stylesCust.cardItem(marginRight)}>
      <View style={stylesCust.cardImage}>
        <Image source={{uri: item.image}} style={stylesCust.image} />
      </View>
      <View style={stylesCust.cardBody}>
        <View style={stylesCust.cardTitle}>
          <Text numberOfLines={2} style={stylesCust.title}>
            {item.title}
          </Text>
        </View>
        <Text numberOfLines={1} style={stylesCust.price}>
          {helpers.formatCurrency(item.price, '$')}
        </Text>
        <Text numberOfLines={1} style={stylesCust.place}>
          {item.category}
        </Text>
        <View style={stylesCust.rating}>
          <FontAwesome5 name="star" size={8} color={color.oranges} />
          <Text style={stylesCust.ratingText}>
            {item.rating.rate} | Terjual {item.rating.count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  cardItem: (marginRight = 0) => [
    {
      height: 210,
      width: width * 0.38,
      marginBottom: 30,
      backgroundColor: color.white,
      borderRadius: 15,
      marginRight,
    },
    styles.shadowCust(),
  ],
  image: {
    resizeMode: 'cover',
    width: width * 0.38,
    height: 100,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  cardImage: {
    height: 100,
    width: width * 0.38,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green,
  },
  cardBody: {paddingHorizontal: 15},
  cardTitle: {
    height: 38,
    marginTop: 5,
    justifyContent: 'center',
  },
  title: styles.h8(),
  price: [styles.h5(color.bluep5)],
  place: [styles.h9(), {marginVertical: 5}],
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: [styles.p7(color.tgrey), {marginLeft: 5}],
});

export default CardProduct;
