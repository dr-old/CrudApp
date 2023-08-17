import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {color, styles} from '../../utils/styles';

interface LoadingExternProps {
  backgroundColor?: string;
}

const LoadingExtern: React.FC<LoadingExternProps> = ({backgroundColor}) => {
  return (
    <View
      style={[
        stylesCust.pageLoading,
        {backgroundColor: backgroundColor ? backgroundColor : color.loading},
      ]}>
      <View style={stylesCust.pageInnerLoading}>
        <ActivityIndicator size="large" color={color.bluep} />
        <Text style={[styles.p3(), {marginTop: 10}]}>Loading...</Text>
      </View>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  pageLoading: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageInnerLoading: {
    position: 'relative',
    zIndex: 99,
    paddingVertical: 17,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: color.white,
  },
});

export default LoadingExtern;
