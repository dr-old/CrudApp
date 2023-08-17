import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonLabel} from '../atoms';

interface ModalFooterProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const ModalFooter: FC<ModalFooterProps> = ({onCancel, onSubmit}) => {
  return (
    <View style={stylesCust.modalContent}>
      <View style={stylesCust.button}>
        <ButtonLabel
          type="default"
          solid={true}
          label="Cancel"
          size="large"
          onClick={onCancel}
        />
      </View>
      <View style={stylesCust.button}>
        <ButtonLabel
          type="danger"
          solid={true}
          label="Delete"
          size="large"
          onClick={onSubmit}
        />
      </View>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  modalContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginTop: 20,
  },
  button: {width: '47%'},
});

export default ModalFooter;
