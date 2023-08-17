/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {color, styles} from '../../utils/styles';

interface LoadingInternProps {
  marginVertical?: number;
}

const LoadingIntern: FC<LoadingInternProps> = ({marginVertical}) => {
  return (
    <View
      style={[
        stylesCust.pageInnerLoading,
        {marginVertical: marginVertical ? marginVertical : 0},
      ]}>
      <ActivityIndicator size="large" color={color.green4} />
      <Text style={[styles.p3(), {marginTop: 10}]}>Loading...</Text>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  pageInnerLoading: {
    marginBottom: 10,
    paddingVertical: 17,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default LoadingIntern;
