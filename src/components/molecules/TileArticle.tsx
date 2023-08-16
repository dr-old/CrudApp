import React from 'react';
import {Image, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';

interface TileArticleProps {
  item: {
    id: number;
    email: string;
    last_name: string;
    avatar: string;
    first_name: string;
  };
  onClick: () => void;
}

const TileArticle: React.FC<TileArticleProps> = ({item, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style={stylesCust.article}>
      <Image source={{uri: item.avatar}} style={stylesCust.articleCard} />
      <View style={stylesCust.articleBody}>
        <View style={stylesCust.articleCardText}>
          <Text style={[styles.h5()]} numberOfLines={2}>
            {item.first_name + ' ' + item.last_name}
          </Text>
          <Text style={[styles.p5(color.grey)]}>{item.email}</Text>
        </View>
        {/* <Text style={[styles.p5(color.grey)]}>{item.id}</Text> */}
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
    flexDirection: 'row',
  },
  articleBody: {flex: 1, padding: 15},
  articleCard: {
    height: 80,
    width: 80,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
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
