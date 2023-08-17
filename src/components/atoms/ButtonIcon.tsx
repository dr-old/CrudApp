import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {color, styles as utilsStyles} from '../../utils/styles';
import Divider from './Divider';

interface ButtonIconProps {
  type:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'default'
    | {
        backgroundColor: string;
        borderColor: string;
        color: string;
      };
  solid?: boolean;
  outline?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  name: string;
  size: number;
  style?: any;
  label?: string;
  labelOut?: string;
  labelColor?: string;
  marginVertical?: number;
  borderRadius?: number;
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  type,
  solid,
  outline,
  onClick,
  disabled,
  name,
  size,
  style,
  label,
  labelOut,
  labelColor,
  marginVertical,
  borderRadius,
  alignSelf,
  alignItems,
}) => {
  let bgcolor = '';
  let textcolor = '';
  let brcolor = '';

  if (typeof type === 'string') {
    if (type === 'primary') {
      bgcolor = color.blue4;
      brcolor = color.blue4;
      textcolor = color.bluep;
    } else if (type === 'success') {
      bgcolor = color.green4;
      brcolor = color.green4;
      textcolor = color.green4;
    } else if (type === 'danger') {
      bgcolor = color.red3;
      brcolor = color.red3;
      textcolor = color.red;
    } else if (type === 'warning') {
      bgcolor = color.oranget;
      brcolor = color.oranget;
      textcolor = color.oranget;
    } else if (type === 'default') {
      bgcolor = color.white2;
      brcolor = color.white2;
      textcolor = color.grey;
    }
  } else {
    bgcolor = type.backgroundColor;
    brcolor = type.borderColor;
    textcolor = type.color;
  }

  if (solid) {
    brcolor = textcolor;
    bgcolor = textcolor;
    textcolor = color.white;
  }

  if (outline) {
    brcolor = textcolor;
    bgcolor = color.white;
  }

  const customStyle = style || [
    stylesCust.filterBackground,
    {
      backgroundColor: bgcolor ? bgcolor : color.white,
      alignSelf: alignSelf ? alignSelf : 'flex-start',
      alignItems: alignItems ? alignItems : 'center',
      borderColor: brcolor,
      marginVertical: marginVertical ? marginVertical : 0,
      borderRadius: borderRadius ? borderRadius : 10,
      height: borderRadius ? borderRadius : 48,
      width: borderRadius ? borderRadius : 48,
    },
  ];

  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        style={customStyle}
        onPress={onClick}>
        <Feather name={name} size={size} color={textcolor} />
        {label && (
          <>
            <Divider height={5} />
            <Text style={utilsStyles.h8(labelColor || textcolor)}>{label}</Text>
          </>
        )}
      </TouchableOpacity>
      {labelOut && (
        <>
          <Divider height={5} />
          <Text style={utilsStyles.h8(labelColor || textcolor)}>
            {labelOut}
          </Text>
        </>
      )}
    </>
  );
};

const stylesCust = StyleSheet.create({
  filterBackground: {
    borderWidth: 1,
    justifyContent: 'center',
  },
});

export default ButtonIcon;
