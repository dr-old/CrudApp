import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonIcon} from '../atoms';
import {color, styles} from '../../utils/styles';

function ModalHeader(props) {
  return (
    <View style={stylesCust.modalContent}>
      <Text style={styles.h3()}>{props.label}</Text>
      <ButtonIcon
        type={stylesCust.buttonType()}
        style={stylesCust.buttonFloat('flex-end')}
        name="x"
        size={20}
        onClick={props.close}
      />
    </View>
  );
}

const stylesCust = StyleSheet.create({
  modalContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    marginBottom: 20,
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
});

export default ModalHeader;
