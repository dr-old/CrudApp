import React from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {BarHeader} from '../../../components/molecules';
import stylesCust from './stylesCust';
import useAction from './useAction';

const Splash = () => {
  const {slides, width, height, page, onScrollEnd} = useAction();

  return (
    <>
      <BarHeader bgcolor={color.white7} />
      <View style={stylesCust.page}>
        <View style={stylesCust.logoText}>
          {/* <Text style={styles.h1(color.bluep5, null, 'textLight')}>My</Text> */}
          <Text style={styles.h1(color.green4, null, 'textMedium')}>Crud</Text>
          <Text style={styles.textBase(30, color.green4, 'textLight', 'none')}>
            App
          </Text>
        </View>
      </View>
    </>
  );
};

export default Splash;
