import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {color, styles} from '../../utils/styles';

function ButtonLabel({
  type,
  solid,
  outline,
  onClick,
  disabled,
  label,
  alignSelf,
  size = 'small',
  full = '100%',
}) {
  let bgcolor = '';
  let textcolor = '';
  let brcolor = '';
  let txsize = 12;
  let txstyle = null;
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
  } else {
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
    txstyle = styles.h4(textcolor, 'center');
  }
  if (size === 'large') {
    txstyle = styles.h3(textcolor, 'center');
  }
  let width = full ? full : undefined;
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={stylesCust.filterBackground(bgcolor, alignSelf, brcolor, width)}>
      <Text
        style={
          txstyle
            ? txstyle
            : styles.textBase(txsize, textcolor, 'textMedium', 'capitalize')
        }>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const stylesCust = StyleSheet.create({
  filterBackground: (
    backgroundColor = color.white,
    alignSelf = 'center',
    borderColor,
    width = undefined,
  ) => ({
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignSelf: alignSelf,
    width: width,
  }),
});

export default ButtonLabel;
