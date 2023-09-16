import React, {useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import {ButtonLabelIcon, Divider} from '../../../components/atoms';
import {color, styles} from '../../../utils/styles';
import {Container, ModalAlert} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';
import moment from 'moment';
import {showMessage} from 'react-native-flash-message';

function TodoDetail({route}) {
  const {data} = route.params;
  const {navigation} = useAction();
  const todosCollection = firestore().collection('todos');
  const [modalAlert, setModalAlert] = useState({status: false, detail: {}});
  const openModal = (message, submit) => {
    setModalAlert({
      status: true,
      message: message,
      onSubmit: submit,
      onCancel: () => closeModal(),
    });
  };

  const closeModal = () => {
    setModalAlert({status: false});
  };

  const handleEdit = () => {
    navigation.push('TodoForm', {data, edit: true});
  };

  const handleDelete = () => {
    // Delete a todo from Firestore
    todosCollection
      .doc(data.id)
      .delete()
      .then(() => {
        console.log('Todo deleted successfully');
        showMessage({
          message: 'Success',
          description: 'Todo deleted successfully',
          type: 'success',
        });
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
        showMessage({
          message: 'Failed',
          description: 'Error deleting todo: ' + error?.message,
          type: 'danger',
        });
      });
  };

  function showCalendarEventWithId() {
    const eventConfig = {
      eventId: data.reminderInfo,
      allowsEditing: false,
      allowsCalendarPreview: true,
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
      },
    };

    AddCalendarEvent.presentEventViewingDialog(eventConfig)
      .then(eventInfo => {
        console.warn(JSON.stringify(eventInfo));
      })
      .catch(error => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  }

  return (
    <>
      <Container
        bgColor={color.white9}
        navbar={{
          type: 'fixed',
          title: 'Detail',
          onClick: () => navigation.goBack(),
        }}>
        <View style={stylesCust.detail}>
          <Text style={styles.h3()}>{data.title}</Text>
          <Text numberOfLines={2} style={styles.textDefault()}>
            {data.description}
          </Text>
          <Text style={styles.h5(color.green4)}>
            Start:{' '}
            {moment(data.reminderStartDate).format('ddd, DD MMM YYYY HH:mm')}
            {'\n'}
            End: {moment(data.reminderEndDate).format('ddd, DD MMM YYYY HH:mm')}
          </Text>
          {data?.reminderInfo ? (
            <ButtonLabelIcon
              onClick={showCalendarEventWithId}
              icon="calendar"
              buttonColor={color.bluep8}
              label="Open Calendar"
            />
          ) : null}
        </View>
      </Container>
      <View style={stylesCust.footer}>
        <ButtonLabelIcon
          onClick={handleEdit}
          icon="edit"
          buttonColor={color.white}
          iconColor={color.tblack}
          label="Edit"
        />
        <Divider height={10} />
        <ButtonLabelIcon
          onClick={() =>
            openModal('Are you sure to delete this data ?', () => {
              handleDelete();
              closeModal();
            })
          }
          icon="trash"
          buttonColor={color.red2}
          label="Delete"
        />
      </View>
      {modalAlert?.status && (
        <View styles={{position: 'absolute'}}>
          <ModalAlert data={modalAlert} close={() => closeModal()} />
        </View>
      )}
    </>
  );
}

export default TodoDetail;
