/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, InputText} from '../atoms';

interface NavHeaderProps {
  title?: string;
  subtitle?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onClick?: () => void;
  onSearch?: () => void;
  onEdit?: {
    icon: string;
    onClick: () => void;
  };
  onClear?: () => void;
}

const NavHeader: FC<NavHeaderProps> = ({
  title,
  subtitle,
  value,
  onChangeText,
  onClick,
  onSearch,
  onEdit,
  onClear,
}) => {
  const buttonType = {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  };
  return (
    <View style={stylesCust.header}>
      {onClick ? (
        <ButtonIcon
          type={{...buttonType, color: color.tblack}}
          style={[
            stylesCust.buttonFloat,
            {
              alignItems: 'flex-start',
            },
          ]}
          name="chevron-left"
          size={20}
          onClick={onClick}
        />
      ) : null}
      {onSearch ? (
        <View style={stylesCust.searchInput}>
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
            <Text
              style={[
                styles.p4(color.tgrey3, 'center'),
                {textTransform: 'none'},
              ]}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      )}
      {onClear ? (
        <ButtonIcon
          type={{...buttonType, color: color.tblack}}
          style={[stylesCust.buttonFloat, {alignItems: 'flex-end'}]}
          name={onSearch ? 'x' : 'search'}
          size={20}
          onClick={onClear}
        />
      ) : null}
      {onClick && !onEdit && !onClear ? (
        <ButtonIcon
          type={{...buttonType, color: color.white9}}
          style={[stylesCust.buttonFloat, {alignItems: 'flex-end'}]}
          name="chevron-left"
          size={20}
          disabled={true}
        />
      ) : null}
      {onEdit ? (
        <ButtonIcon
          type={{
            ...buttonType,
            color: onEdit.icon === 'edit' ? color.tblack : color.green,
          }}
          style={[stylesCust.buttonFloat, {alignItems: 'flex-end'}]}
          name={onEdit.icon}
          size={20}
          onClick={onEdit.onClick}
        />
      ) : null}
    </View>
  );
};

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
  buttonFloat: {
    justifyContent: 'center',
    width: 38,
    height: 38,
  },
  title: styles.h3(color.tblack, 'center'),
});

export default NavHeader;
