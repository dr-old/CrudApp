import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {BarHeader} from '../../../components/molecules';
import stylesCust from './stylesCust';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Splash = () => {
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();

  useEffect(() => {
    navigateToLogin();
  });

  const navigateToLogin = async () => {
    const wait = time => new Promise(resolve => setTimeout(resolve, time));
    return wait(2000).then(() => {
      if (user?.token) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    });
  };

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
