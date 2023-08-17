/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TextStyle} from 'react-native';
import {color, styles as utilsStyles} from '../../utils/styles';

interface ButtonLabelProps {
  type:
    | 'primary'
    | 'success'
    | 'success-second'
    | 'danger'
    | 'warning'
    | 'default';
  solid?: boolean;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  size?: 'small' | 'normal' | 'large';
  full?: string;
}

const ButtonLabel: React.FC<ButtonLabelProps> = ({
  type,
  solid,
  outline,
  onClick,
  disabled,
  label,
  alignSelf,
  size = 'small',
  full = '100%',
}) => {
  let bgcolor = '';
  let textcolor = '';
  let brcolor = '';
  let txsize = 12;
  let txstyle: TextStyle | null = null;

  if (type === 'primary') {
    bgcolor = color.blue4;
    brcolor = color.blue4;
    textcolor = color.blue;
  } else if (type === 'success') {
    bgcolor = color.green4;
    brcolor = color.green4;
    textcolor = color.green4;
  } else if (type === 'success-second') {
    bgcolor = color.white;
    brcolor = color.green4;
    textcolor = color.green4;
  } else if (type === 'danger') {
    bgcolor = color.red3;
    brcolor = color.red3;
    textcolor = color.red;
  } else if (type === 'warning') {
    bgcolor = color.orange2;
    brcolor = color.orange2;
    textcolor = color.orange;
  } else if (type === 'default') {
    bgcolor = color.white3;
    brcolor = color.white3;
    textcolor = color.tgrey;
  }

  if (solid) {
    brcolor = disabled ? color.white3 : textcolor;
    bgcolor = disabled ? color.white3 : textcolor;
    textcolor = disabled ? color.tgrey : color.white;
  }

  if (outline) {
    brcolor = disabled ? color.tgrey3 : textcolor;
    bgcolor = disabled ? color.tgrey3 : textcolor;
    textcolor = disabled ? color.tgrey : color.white;
  }

  if (size === 'normal') {
    txstyle = utilsStyles.h4(textcolor, 'center');
  }

  if (size === 'large') {
    txstyle = utilsStyles.h3(textcolor, 'center');
  }

  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={[
        stylesCust.filterBackground,
        {
          backgroundColor: bgcolor ? bgcolor : color.white,
          alignSelf: alignSelf ? alignSelf : 'center',
          borderColor: brcolor,
          width: full ? full : '100%',
        },
      ]}>
      <Text
        style={
          txstyle
            ? txstyle
            : utilsStyles.textBase(
                txsize,
                textcolor,
                'textMedium',
                'capitalize',
              )
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const stylesCust = StyleSheet.create({
  filterBackground: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default ButtonLabel;
