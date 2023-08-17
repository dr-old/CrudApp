import React from 'react';
import {View, StyleSheet} from 'react-native';
import {color} from '../../utils/styles';
import {ButtonLabel} from '../atoms';

function ModalFooter(props) {
  return (
    <View style={stylesCust.modalContent}>
      <View style={{width: '47%'}}>
        <ButtonLabel
          type="default"
          solid={true}
          label="Cancel"
          size="large"
          onClick={props.onCancel}
        />
      </View>
      <View style={{width: '47%'}}>
        <ButtonLabel
          type="danger"
          solid={true}
          label="Delete"
          size="large"
          onClick={props.onSubmit}
        />
      </View>
    </View>
  );
}

const stylesCust = StyleSheet.create({
  modalContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginTop: 20,
    // marginVertical: 17,
  },
  approveButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  reset: {
    width: '48%',
    backgroundColor: color.white2,
    // marginTop: 10,
    // marginBottom: 20,
  },
  save: {
    backgroundColor: color.green,
    width: '48%',
    // marginTop: 10,
    // marginBottom: 20,
  },
});

export default ModalFooter;
