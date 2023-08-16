import moment from 'moment';
import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {helpers} from '../../utils';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';

const TileEmployee = ({item, onClick}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={stylesCust.cardItem(color.white)}>
      <ButtonIcon
        type={{
          backgroundColor: color.green7,
          borderColor: color.green7,
          color: color.tblack,
        }}
        name="user"
        size={25}
        disabled={true}
      />
      <View style={stylesCust.cardBody}>
        {/* <Text style={styles.h7(color.green4)}>{status}</Text> */}
        <Text style={styles.h5()}>{item.company_name}</Text>
        {/* <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}> */}
        <Text style={styles.p4()}>
          {item.first_name + ' ' + item.last_name}
        </Text>
        <Text
          onPress={() => Linking.openURL(item.web)}
          style={styles.textBase(12, color.green4, 'textRegular', 'none')}>
          {item.web}
        </Text>
        {/* </View> */}
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

export default TileEmployee;
