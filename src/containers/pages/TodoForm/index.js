import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import firestore from '@react-native-firebase/firestore';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
import {FormInput} from '../../../components/molecules';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

const utcDateToString = momentInUTC => {
  let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
  return s;
};

function TodoForm({route}) {
  const {data, edit} = route.params;
  const todosCollection = firestore().collection('todos');
  const {navigation, userCreate, form, handleValidate, onChangeText} =
    useAction();
  const dispatch = useDispatch();
  const currentDate = new Date();
  const twoHoursLater = new Date(currentDate.getTime() + 2 * 60 * 60 * 1000);
  const [startDate, setStartDate] = useState({
    value: currentDate,
    show: false,
  });
  const [endDate, setEndDate] = useState({
    value: twoHoursLater,
    show: false,
  });
  const [reminder, setReminder] = useState(data.reminderStatus || false);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    unsubscribe();
  }, []);

  const unsubscribe = () => {
    if (edit) {
      dispatch({
        type: 'SETALL_FORM_TODO',
        title: data.title,
        description: data.description,
      });
      setEditingTodo(data);
      setReminder(data.reminderStatus);
      setEndDate({show: false, value: data.reminderEndDate});
      setStartDate({show: false, value: data.reminderStartDate});
    }
  };

  function addToCalendar() {
    const eventConfig = {
      title: form.title,
      startDate: utcDateToString(startDate.value),
      endDate: utcDateToString(endDate.value),
      notes: form.description,
      navigationBarIOS: {
        tintColor: 'orange',
        backgroundColor: 'green',
        titleColor: 'blue',
      },
    };

    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(event => {
        console.log('event', event);
        if (event?.action === 'SAVED') {
          addTodo(event.calendarItemIdentifier);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  const handleSave = () => {
    if (reminder) {
      addToCalendar();
    } else {
      addTodo();
    }
  };

  const addTodo = eventCalendar => {
    if (editingTodo) {
      // Update an existing todo in Firestore
      todosCollection
        .doc(editingTodo.id)
        .update({
          title: form.title,
          description: form.description,
          reminderStartDate: new Date(startDate?.value).toISOString(),
          reminderEndDate: new Date(endDate?.value).toISOString(),
          reminderStatus: reminder,
          reminderInfo: eventCalendar || null,
          updatedAt: new Date().toISOString(),
        })
        .then(() => {
          showMessage({
            message: 'Success',
            description: 'Todo updated successfully',
            type: 'success',
          });
          navigation.replace('Home');
        })
        .catch(error => {
          console.error('Error updating todo:', error);
          showMessage({
            message: 'Failed',
            description: 'Error updating todo: ' + error?.message,
            type: 'danger',
          });
        });

      setEditingTodo(null); // Clear editing state
    } else {
      const payload = {
        title: form.title,
        description: form.description,
        reminderStartDate: new Date(startDate?.value).toISOString(),
        reminderEndDate: new Date(endDate?.value).toISOString(),
        reminderStatus: reminder,
        reminderInfo: eventCalendar || null,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      };
      console.log('payload', payload);
      todosCollection
        .add(payload)
        .then(() => {
          showMessage({
            message: 'Success',
            description: 'Todo added successfully',
            type: 'success',
          });
          navigation.replace('Home');
        })
        .catch(error => {
          console.error('Error updating todo:', error);
          showMessage({
            message: 'Failed',
            description: 'Error adding todo: ' + error?.message,
            type: 'danger',
          });
        });
    }
    // dispatch({type: 'CLEAN_FORM_TODO'});
    // setReminder(null);
    // setStartDate({
    //   value: currentDate,
    //   show: false,
    // });
    // setEndDate({
    //   value: twoHoursLater,
    //   show: false,
    // });
  };

  return (
    <Container
      bgColor={color.white9}
      loading={userCreate?.loading}
      scrollview={false}
      navbar={{
        type: 'nofixed',
        title: `${editingTodo ? 'Edit' : 'Create'} To do List`,
        onClick: () => navigation.goBack(),
      }}>
      <Divider height={20} />
      <View style={stylesCust.card}>
        <FormInput
          label="Title"
          placeholder="Your title"
          type="solid"
          solid={color.white}
          value={form?.title}
          onChangeText={value => onChangeText('title', value)}
        />
        <FormInput
          label="Description"
          placeholder="Your description"
          type="solid"
          solid={color.white}
          value={form?.description}
          multiline={true}
          onChangeText={value => onChangeText('description', value)}
        />
        <FormInput
          label="Start Date"
          placeholder="Your start date"
          type="solid"
          disabled={true}
          solid={color.white}
          value={moment(startDate.value).format('DD MMM YYYY HH:mm')}
          icon={{
            name: 'calendar',
            color: color.green4,
            size: 18,
            onClick: () => setStartDate({...startDate, show: true}),
          }}
        />
        <FormInput
          label="End Date"
          placeholder="Your end date"
          type="solid"
          disabled={true}
          solid={color.white}
          value={moment(endDate.value).format('DD MMM YYYY HH:mm')}
          icon={{
            name: 'calendar',
            color: color.green4,
            size: 18,
            onClick: () => setEndDate({...endDate, show: true}),
          }}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ButtonIcon
            type={stylesCust.buttonType(reminder)}
            onClick={() => setReminder(!reminder)}
            name={reminder ? 'check-circle' : 'circle'}
            size={20}
          />
          <Divider width={10} />
          <Text style={styles.textBase()}>Reminder to Google Calendar</Text>
        </View>
      </View>
      <View style={stylesCust.footer}>
        <ButtonLabel
          type="success"
          solid={true}
          label="Save"
          size="large"
          disabled={!handleValidate()}
          onClick={() => handleSave()}
        />
      </View>
      <DateTimePickerModal
        isVisible={startDate.show || endDate.show}
        mode="datetime" // You can change this to "time" or "datetime"
        onConfirm={date => {
          if (startDate.show) {
            setStartDate({value: date.toISOString(), show: false});
            setEndDate({
              value: new Date(date.getTime() + 2 * 60 * 60 * 1000),
              show: false,
            });
          }
          if (endDate.show) {
            setEndDate({value: date.toISOString(), show: false});
          }
        }}
        onCancel={() => {
          if (startDate.show) {
            setStartDate({...form.startDate, show: false});
          }
          if (endDate.show) {
            setEndDate({...form.endDate, show: false});
          }
        }}
      />
    </Container>
  );
}

export default TodoForm;
