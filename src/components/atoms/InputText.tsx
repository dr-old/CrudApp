import React, {Ref} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {color} from '../../utils/styles';

interface InputTextProps extends Omit<TextInputProps, 'autoCompleteType'> {
  myHeight?: number;
  textRight?: 'left' | 'right';
  multiline?: boolean;
  customAutoComplete?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | undefined;
  refInput?: Ref<TextInput>;
  disabled?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  myHeight,
  textRight,
  value,
  placeholder,
  disabled,
  onChangeText,
  returnKeyType,
  refInput,
  secureTextEntry,
  onKeyPress,
  onSubmitEditing,
  multiline,
  onBlur,
  onFocus,
  keyboardType,
  customAutoComplete,
}) => {
  return (
    <TextInput
      style={[
        stylesCust.input,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: disabled ? color.tblack : color.tblack,
          textAlign: textRight,
          textAlignVertical: multiline ? 'top' : 'center',
          height: myHeight || 40,
        },
      ]}
      value={value}
      editable={!disabled}
      placeholder={placeholder}
      placeholderTextColor={color.tgrey3}
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      ref={refInput}
      secureTextEntry={secureTextEntry}
      onKeyPress={onKeyPress}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      numberOfLines={multiline ? 4 : 2}
      onBlur={onBlur}
      onFocus={onFocus}
      keyboardType={keyboardType}
      autoComplete={customAutoComplete}
    />
  );
};

const stylesCust = StyleSheet.create({
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    flex: 1,
    paddingVertical: 10,
  },
});

export default InputText;
