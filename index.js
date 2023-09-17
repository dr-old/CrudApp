/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebase} from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDpPSUdgye3uIkwTqa4v2jOXE-PcX3n4yo',
  authDomain: 'todolist-fbc2f.firebaseapp.com',
  projectId: 'todolist-fbc2f',
  storageBucket: 'todolist-fbc2f.appspot.com',
  messagingSenderId: '90555709774',
  appId: '1:90555709774:web:fa8ee238547720cde8061f',
  databaseURL: 'https://todolist-fbc2f-default-rtdb.firebaseio.com',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Handle background messages using setBackgroundMessageHandler
  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
}

// // Initialize Notifee
// notifee.onBackgroundEvent(async event => {
//   console.log('Notifee handled in the background!', event);
// });

AppRegistry.registerComponent(appName, () => App);
