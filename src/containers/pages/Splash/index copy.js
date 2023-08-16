import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {BarHeader, SliderItem} from '../../../components/molecules';
import {ButtonLabel, Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import useAction from './useAction';

const Splash = () => {
  const {slides, width, height, page, onScrollEnd} = useAction();

  return (
    <>
      <BarHeader bgcolor={color.white7} />
      <SafeAreaView style={stylesCust.container}>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          decelerationRate="fast">
          {slides.map(item => {
            return (
              <SliderItem
                key={item.key}
                item={item}
                width={width}
                height={height}
              />
            );
          })}
        </ScrollView>
        {page !== 2 ? (
          <View style={stylesCust.paginationWrapper}>
            {slides.map((_, index) => {
              return (
                <View
                  style={[
                    stylesCust.paginationDots,
                    {opacity: page === index ? 1 : 0.2},
                  ]}
                  key={index}
                />
              );
            })}
          </View>
        ) : null}
      </SafeAreaView>
    </>
  );
};

export default Splash;
