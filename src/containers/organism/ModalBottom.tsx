import React, {Component} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {styles} from '../../utils';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../../utils/styles';

interface ModalBottomProps {
  data: Array<{id: number; label: string}>;
  title: string;
  actived: {id: number};
  onSelected: (item: {id: number; label: string}) => void;
}

interface ModalBottomState {
  isVisible: boolean;
}

class ModalBottom extends Component<ModalBottomProps, ModalBottomState> {
  constructor(props: ModalBottomProps) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  showModal = () => {
    this.setState({isVisible: true});
  };

  hideModal = () => {
    this.setState({isVisible: false});
  };

  onSelect = (item: {id: number; label: string}) => {
    const {onSelected} = this.props;
    if (typeof onSelected === 'function') {
      console.log(item);
      onSelected(item);
    }
    this.hideModal();
  };

  render() {
    const {data, title, actived} = this.props;

    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={this.state.isVisible}
        onRequestClose={this.hideModal}>
        <View style={stylesCust.modalContainer}>
          <View style={stylesCust.modalContent}>
            <View style={stylesCust.modalHeader}>
              <Text style={styles.h4()}>{title}</Text>
              <Feather
                onPress={this.hideModal}
                name="x"
                size={25}
                color={color.tblack}
              />
            </View>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => this.onSelect(item)}
                  style={stylesCust.modalItem}>
                  <Text style={styles.p2()}>{item.label}</Text>
                  <Feather
                    name="check"
                    size={25}
                    color={actived.id === item.id ? color.green4 : color.white}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const stylesCust = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: color.line,
    paddingBottom: 10,
    marginBottom: 10,
  },
  modalItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ModalBottom;
