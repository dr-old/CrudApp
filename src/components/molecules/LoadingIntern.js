import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {color, styles} from '../../utils/styles';

function LoadingIntern({marginVertical}) {
  return (
    <View style={stylesCust.pageInnerLoading(marginVertical)}>
      <ActivityIndicator size="large" color={color.green4} />
      <Text style={stylesCust.text}>Loading...</Text>
    </View>
  );
}

const stylesCust = StyleSheet.create({
  pageInnerLoading: (marginVertical = 0) => ({
    marginVertical: marginVertical,
    marginBottom: 10,
    paddingVertical: 17,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: color.white,
  }),
  text: [styles.p3(), {marginTop: 10}],
});

export default LoadingIntern;
