import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonIcon} from '../atoms';
import {color, styles} from '../../utils/styles';

interface ModalHeaderProps {
  label: string;
  close: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = ({label, close}) => {
  return (
    <View style={stylesCust.modalContent}>
      <Text style={styles.h3()}>{label}</Text>
      <ButtonIcon
        type={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: color.tblack,
        }}
        style={stylesCust.buttonFloat}
        name="x"
        size={20}
        onClick={close}
      />
    </View>
  );
};

const stylesCust = StyleSheet.create({
  modalContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    marginBottom: 20,
  },
  buttonFloat: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 38,
    height: 38,
  },
});

export default ModalHeader;
