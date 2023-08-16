import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import Feather from 'react-native-vector-icons/Feather';
import moment from 'moment';

const TileArticle = ({item, onClick, marginRight}) => {
  return (
    <TouchableOpacity onPress={onClick} style={stylesCust.article}>
      <Image source={{uri: item.image}} style={stylesCust.articleCard} />
      <View style={stylesCust.articleBody}>
        <View style={stylesCust.articleCardText}>
          <Text style={[styles.h5()]} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        <View style={stylesCust.articleCardBody}>
          <View style={stylesCust.user}>
            <Text
              style={styles.textBase(11, color.tblack, 'textRegular', 'none')}>
              by{' '}
            </Text>
            <Text style={[styles.p5()]}>Danni Ramdan</Text>
          </View>
          <Text style={[styles.p5(color.grey)]}>
            {moment().format('DD MMM YYYY HH:mm')}
          </Text>
        </View>
        <View style={stylesCust.category}>
          <Text style={styles.p5(color.green4)}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  user: {
    flex: 1,
    flexDirection: 'row',
  },
  article: {
    flex: 1,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: color.white,
  },
  articleBody: {flex: 1, padding: 15},
  articleCard: {
    height: 100,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: 'cover',
  },
  articleCardText: {
    height: 40,
    justifyContent: 'flex-start',
  },
  articleCardBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  category: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: color.green5,
    borderRadius: 15,
  },
});

export default TileArticle;
