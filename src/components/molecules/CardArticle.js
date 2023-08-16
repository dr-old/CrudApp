import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {color, styles} from '../../utils/styles';

const CardArticle = ({item, onClick, marginRight}) => {
  return (
    <TouchableOpacity onPress={onClick} style={stylesCust.article}>
      <Image source={{uri: item.image}} style={stylesCust.articleCard} />
      <View style={stylesCust.articleCardText}>
        <Text style={[styles.p5(color.white)]} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  article: {
    width: 132,
    marginRight: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
  },
  articleCard: {
    height: 130,
    width: 130,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  articleCardText: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: -40,
    backgroundColor: color.loading,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default CardArticle;
