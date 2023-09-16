import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Divider} from '../../../components/atoms';
import {useSelector} from 'react-redux';
import axios from 'axios';

function EmployeeAdd() {
  const user = useSelector(state => state.generalReducer.user);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [title, setTitle] = useState(''); // Add title state
  const [description, setDescription] = useState(''); // Add description state
  const [reminderDate, setReminderDate] = useState(''); // Add reminder date state
  const [reminderStatus, setReminderStatus] = useState(false); // Add reminder status state
  const [email, setEmail] = useState(''); // Add email state
  const [editingTodo, setEditingTodo] = useState(null);

  const todosCollection = firestore().collection('todos');

  useEffect(() => {
    // Load todos from Firestore on component mount
    const unsubscribe = todosCollection.onSnapshot(querySnapshot => {
      const newTodos = [];
      querySnapshot?.forEach(doc => {
        newTodos.push({
          id: doc.id,
          text: doc.data().text,
          title: doc.data().title,
          description: doc.data().description,
          reminderDate: doc.data().reminderDate,
          reminderStatus: doc.data().reminderStatus,
          email: doc.data().email,
          createdAt: doc.data().createdAt,
          updatedAt: doc.data().updatedAt,
        });
      });
      setTodos(newTodos);
    });

    return () => unsubscribe(); // Unsubscribe from Firestore listener on unmount
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    if (editingTodo) {
      // Update an existing todo in Firestore
      todosCollection
        .doc(editingTodo.id)
        .update({
          text: newTodo,
          title,
          description,
          reminderDate,
          reminderStatus,
          email,
          updatedAt: new Date().toISOString(),
        })
        .then(() => {
          console.log('Todo updated successfully');
        })
        .catch(error => {
          console.error('Error updating todo:', error);
        });

      setEditingTodo(null); // Clear editing state
    } else {
      // Add a new todo to Firestore with additional fields
      todosCollection
        .add({
          text: newTodo,
          title,
          description,
          reminderDate,
          reminderStatus,
          email,
          createdAt: new Date().toISOString(),
          updatedAt: null,
        })
        .then(() => {
          console.log('Todo added successfully');
        })
        .catch(error => {
          console.error('Error adding todo:', error);
        });
    }
    // Reset input fields
    setNewTodo('');
    setTitle('');
    setDescription('');
    setReminderDate('');
    setReminderStatus(false);
    setEmail('');
  };

  const deleteTodo = id => {
    // Delete a todo from Firestore
    todosCollection
      .doc(id)
      .delete()
      .then(() => {
        console.log('Todo deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  };

  const createCalendarEvent = async (accessToken, eventDetails) => {
    try {
      const response = await axios.post(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events',
        eventDetails,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const createdEvent = response.data;
      console.log('Event created', createdEvent);
    } catch (error) {
      console.log('Error creating event', error.response);
    }
  };

  // Example event details
  const eventDetails = {
    summary: 'Sample Event',
    description: 'This is a sample event description',
    start: {
      dateTime: '2023-09-15T10:00:00',
      timeZone: 'Asia/Jakarta',
    },
    end: {
      dateTime: '2023-09-15T12:00:00',
      timeZone: 'Asia/Jakarta',
    },
  };

  // Call the function with the access token and event details
  // createCalendarEvent(accessToken, eventDetails);

  return (
    <View style={styles.container}>
      <Text>To-Do List</Text>
      <TextInput
        placeholder="Add a new task"
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
      />
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        placeholder="Reminder Date"
        value={reminderDate}
        onChangeText={text => setReminderDate(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Add" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Reminder Date: {item.reminderDate}</Text>
            <Text>Email: {item.email}</Text>
            <Button title="Delete" onPress={() => deleteTodo(item.id)} />
            <Divider height={10} />
            <Button
              title="Edit"
              onPress={() => {
                setEditingTodo(item);
                setNewTodo(item.text);
                setTitle(item.title);
                setDescription(item.description);
                setReminderDate(item.reminderDate);
                setReminderStatus(item.reminderStatus);
                setEmail(item.email);
              }}
            />
            <Divider height={10} />

            <Button
              title="Add to Calendar"
              onPress={() => createCalendarEvent(user.token, eventDetails)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  todoItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
  },
});

export default EmployeeAdd;
