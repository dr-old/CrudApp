import React, {useState, FC, Ref} from 'react';
import {View, StyleSheet, Text, TextInputProps, TextInput} from 'react-native';
import {styles, color} from '../../utils/styles';
import {ButtonIcon, Divider, InputText} from '../atoms';

interface FormInputProps extends TextInputProps {
  label?: string;
  type?: 'outline' | 'solid';
  solid?: string;
  textRight?: 'left' | 'right';
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  refInput?: Ref<TextInput>;
  secureTextEntry?: boolean;
  onKeyPress?: (event: any) => void;
  onSubmitEditing?: () => void;
  multiline?: boolean;
  icon?: {
    name?: string;
    color?: string;
    onClick?: () => void;
  };
  autoComplete?:
    | 'off'
    | 'username'
    | 'password'
    | 'email'
    | 'name'
    | 'tel'
    | 'street-address'
    | 'postal-code'
    | undefined;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type,
  solid,
  textRight,
  placeholder,
  value,
  disabled,
  onChangeText,
  refInput,
  secureTextEntry,
  onKeyPress,
  onSubmitEditing,
  multiline,
  icon,
  keyboardType,
  autoComplete,
}) => {
  const [isFocus, setFocus] = useState<boolean | null>(null);
  let brcolor = '';
  let bgcolor = 'transparent';
  let brradius = 8;
  let padhrz = 10;

  if (type === 'outline') {
    brcolor = color.line;
  }
  if (type === 'solid' || disabled) {
    bgcolor = solid ? solid : color.tgrey2;
    brcolor = solid ? solid : color.tgrey2;
  }

  return (
    <View>
      {label && (
        <>
          <Text style={styles.textBase()}>{label}</Text>
          <Divider width={10} height={0} />
        </>
      )}
      <View
        style={[
          stylesCust.inputText,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderColor: isFocus ? color.green4 : brcolor,
            borderRadius: brradius,
            paddingHorizontal: padhrz,
            backgroundColor: bgcolor,
            height: multiline ? 100 : 40,
          },
        ]}>
        <InputText
          myHeight={multiline ? 100 : undefined}
          textRight={textRight}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChangeText={onChangeText}
          refInput={refInput}
          secureTextEntry={secureTextEntry}
          onKeyPress={onKeyPress}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          keyboardType={keyboardType}
          autoComplete={autoComplete}
        />
        {icon?.name ? (
          <ButtonIcon
            type={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              color: icon.color ? icon.color : color.blue,
            }}
            style={stylesCust.inputIcon}
            name={icon.name}
            size={20}
            onClick={icon.onClick}
          />
        ) : null}
      </View>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  inputText: {
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcon: {
    paddingLeft: 17,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default FormInput;
