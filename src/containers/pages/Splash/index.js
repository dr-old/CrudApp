import React from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {BarHeader} from '../../../components/molecules';
import stylesCust from './stylesCust';
import useAction from './useAction';

const Splash = () => {
  const {slides, width, height, page, onScrollEnd, counter} = useAction();

  return (
    <>
      <BarHeader bgcolor={color.green4} />
      <View style={stylesCust.page}>
        <View style={stylesCust.logoText}>
          <Text style={styles.h1(color.white, null, 'textMedium')}>Crud</Text>
          <Text style={styles.textBase(30, color.white, 'textLight', 'none')}>
            App
          </Text>
        </View>
        <Text style={styles.p4(color.white, 'center')}>
          Copyright by Danni Ramdan
        </Text>
      </View>
    </>
  );
};

export default Splash;
