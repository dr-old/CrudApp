/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {color, styles} from '../../utils/styles';

interface ErrorMessageProps {
  marginVertical: number;
  message: string;
  image?: ImageSourcePropType;
}

function ErrorMessage({marginVertical, message, image}: ErrorMessageProps) {
  return (
    <View
      style={{
        justifyContent: 'center',
        marginVertical,
        marginHorizontal: 17,
      }}>
      <Text
        style={[
          styles.textBase(25, color.grey, 'textSemiBold'),
          {
            paddingBottom: 5,
            textAlign: 'center',
          },
        ]}>
        Oops!
      </Text>
      <Text
        style={[
          styles.textBase(14, color.grey, 'textMedium', 'none'),
          {
            paddingBottom: 10,
            textAlign: 'center',
          },
        ]}>
        {message}
      </Text>
      {image ? <Image source={image} style={stylesCust.image} /> : null}
    </View>
  );
}

const stylesCust = StyleSheet.create({
  image: {resizeMode: 'contain', width: undefined, height: 200},
});

export default ErrorMessage;
