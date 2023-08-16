import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color} from '../../utils/styles';
import Carousel from 'react-native-reanimated-carousel';

const CardCarousel = ({data, width}) => {
  return (
    <SafeAreaView>
      <Carousel
        loop
        width={width}
        height={width / 3}
        autoPlay={true}
        autoPlayInterval={1500}
        pagingEnabled={true}
        data={data}
        renderItem={({item, index}) => (
          <View key={index} style={{marginLeft: 30}}>
            <Image source={item.image} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CardCarousel;

const stylesCust = StyleSheet.create({
  imageContainer: {
    borderRadius: 13,
    overflow: 'hidden',
  },
  image: {
    width: 283,
    height: 114,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: color.bluep,
    marginLeft: 10,
  },
});
