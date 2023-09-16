/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebase} from '@react-native-firebase/app';
import {GoogleSignin} from '@react-native-community/google-signin';

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
}

// AIzaSyCAvrollUzKUV0OCfwjBSnEFA1xG612O1Q

// Initialize Google Sign-In
GoogleSignin.configure({
  // scopes: ['https://www.googleapis.com/auth/calendar'],
  webClientId:
    '90555709774-q79qqsorlmdrjfoqt8644atcvj8reo4h.apps.googleusercontent.com',
  // webClientId:
  //   '802598629686-h1dcd2ds43206goekaflt8cagqvgmr44.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
