import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Divider from './Divider';
import {color, styles} from '../../utils/styles';

interface ButtonDetailProps {
  buttonColor: string;
  icon: string;
  iconColor?: string;
  label: string;
  onClick?: () => void;
}

function ButtonLabelIcon({
  buttonColor,
  icon,
  iconColor,
  label,
  onClick,
}: ButtonDetailProps) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[stylesCust.calendar, {backgroundColor: buttonColor}]}>
      <Feather
        name={icon}
        size={20}
        color={iconColor ? iconColor : color.white}
      />
      <Divider width={10} height={0} />
      <Text style={styles.h5(iconColor ? iconColor : color.white)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const stylesCust = StyleSheet.create({
  calendar: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default ButtonLabelIcon;
