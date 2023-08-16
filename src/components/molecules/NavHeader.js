import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider, InputText} from '../atoms';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

function NavHeader({
  title,
  subtitle,
  value,
  onChangeText,
  onClick,
  onSearch,
  onProfile,
  onClear,
}) {
  return (
    <View style={stylesCust.header}>
      {onClick ? (
        <ButtonIcon
          type={stylesCust.buttonType()}
          style={stylesCust.buttonFloat()}
          name="chevron-left"
          size={20}
          onClick={onClick}
        />
      ) : null}
      {onSearch ? (
        <View style={stylesCust.searchInput}>
          {/* <Feather name="search" size={20} color={color.tgrey3} />
          <Divider width={10} /> */}
          <InputText
            placeholder="Search in here ..."
            value={value}
            onChangeText={onChangeText}
            returnKeyType="search"
            onSubmitEditing={onSearch}
          />
        </View>
      ) : null}
      {onSearch ? null : (
        <View style={stylesCust.headerText}>
          {title ? <Text style={stylesCust.title}>{title}</Text> : null}
          {subtitle ? (
            <Text style={stylesCust.subtitle}>{subtitle}</Text>
          ) : null}
        </View>
      )}
      {onClear ? (
        <ButtonIcon
          type={stylesCust.buttonType()}
          style={stylesCust.buttonFloat('flex-end')}
          name={onSearch ? 'x' : 'search'}
          size={20}
          onClick={onClear}
        />
      ) : null}
      {onClick && !onClear ? (
        <ButtonIcon
          type={stylesCust.buttonType(color.white9)}
          style={stylesCust.buttonFloat('flex-end')}
          name="chevron-left"
          size={20}
          disabled={true}
        />
      ) : null}
    </View>
  );
}

const stylesCust = StyleSheet.create({
  profile: {
    backgroundColor: color.bluep5,
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
  },
  searchInput: {
    backgroundColor: color.white,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 87,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: color.white9,
  },
  buttonType: (clr = color.tblack) => ({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: clr,
  }),
  buttonFloat: (alignItems = 'flex-start') => ({
    alignItems: alignItems,
    justifyContent: 'center',
    width: 38,
    height: 38,
  }),
  title: styles.h3(color.tblack, 'center'),
  subtitle: [styles.p4(color.tgrey3, 'center'), {textTransform: 'none'}],
});

export default NavHeader;
