import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/router';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {env} from './src/utils';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId: env.GOOGLE.CLIENTID,
});

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
      <FlashMessage
        position="top"
        duration={3000}
        floating={true}
        hideOnPress={true}
      />
    </>
  );
}

export default App;
