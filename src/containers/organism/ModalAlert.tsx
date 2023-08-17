import React, {FC} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {ModalFooter, ModalHeader} from '../../components/molecules';
import {color, styles} from '../../utils/styles';

interface ModalAlertProps {
  data: {
    status: boolean;
    message: string;
    onSubmit?: () => void;
    onCancel?: () => void;
    labelSubmit?: string | null;
    labelCancel?: string | null;
  };
  close: () => void;
}

const ModalAlert: FC<ModalAlertProps> = ({data, close}) => {
  return (
    <View style={stylesCust.centeredView}>
      <Modal
        animationType="fade"
        transparent
        visible={data.status}
        onRequestClose={close}>
        <View style={stylesCust.centeredView}>
          <View style={stylesCust.modalView}>
            <ModalHeader label="Attention" close={close} />
            <View style={stylesCust.message}>
              <Text
                style={styles.textBase(
                  13,
                  color.tblack,
                  'textRegular',
                  'none',
                )}>
                {data.message}
              </Text>
            </View>
            {data.onSubmit && data.onCancel && (
              <ModalFooter
                onSubmit={data.onSubmit}
                labelSubmit={data.labelSubmit ?? null}
                onCancel={data.onCancel}
                labelCancel={data.labelCancel ?? null}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  message: {width: '100%', marginBottom: 20},
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#00000060',
  },
  infoBorder: {
    borderBottomColor: color.white2,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  modalContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 13,
    marginBottom: 5,
  },
});

export default ModalAlert;
