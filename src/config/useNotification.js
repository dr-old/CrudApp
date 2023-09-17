import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid, Platform} from 'react-native';
import notifee, {TriggerType} from '@notifee/react-native';
import axios from 'axios';
import {env} from '../utils';
import {useDispatch, useSelector} from 'react-redux';

const usePushNotification = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.generalReducer.user);

  const requestUserPermission = async () => {
    if (Platform.OS === 'ios') {
      //Request iOS permission
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    } else if (Platform.OS === 'android') {
      //Request Android permission (For API level 33+, for 32 or below is not required)
      const res = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      console.log('res', res);
    }
  };

  const getFCMToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Your Firebase Token is:', fcmToken);
      dispatch({
        type: 'SET_USER_AUTH',
        inputType: 'tokenFirebase',
        inputValue: fcmToken,
      });
    } else {
      console.log('Failed', 'No token received');
    }
  };

  const listenToForegroundNotifications = async () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        'A new message arrived! (FOREGROUND)',
        JSON.stringify(remoteMessage),
      );
      await onDisplayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
      });
    });
    return unsubscribe;
  };

  const listenToBackgroundNotifications = async () => {
    const unsubscribe = messaging().setBackgroundMessageHandler(
      async remoteMessage => {
        console.log(
          'A new message arrived! (BACKGROUND)',
          JSON.stringify(remoteMessage),
        );
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromBackground = async () => {
    const unsubscribe = messaging().onNotificationOpenedApp(
      async remoteMessage => {
        console.log(
          'App opened from BACKGROUND by tapping notification:',
          JSON.stringify(remoteMessage),
        );
        // navigation.navigate(remoteMessage.data.type);
      },
    );
    return unsubscribe;
  };

  const onNotificationOpenedAppFromQuit = async () => {
    const message = await messaging().getInitialNotification();

    if (message) {
      console.log(
        'App opened from QUIT by tapping notification:',
        JSON.stringify(message),
      );
      // set navigation in router
      //   const navigation = useNavigation();
      //   const [loading, setLoading] = useState(true);
      //   const [initialRoute, setInitialRoute] = useState('Home');
      //   setInitialRoute(remoteMessage.data.type);
      //   setLoading(false);
    }
  };

  async function onDisplayNotification({title, body}) {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  async function onCreateTriggerNotification() {
    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 2); // add 5 minutes from now
    console.log('setMinutes', date);
    // Create a time-based trigger
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger,
    );
  }

  const onSendFcm = async ({title, body}) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://fcm.googleapis.com/fcm/send',
        data: JSON.stringify({
          to: user.tokenFirebase,
          notification: {
            title,
            body,
            sound: 'default',
          },
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `key=${env.FIREBASE.serverKey}`,
        },
      });

      console.log('FCM notification sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending FCM notification:', error);
    }
  };

  return {
    requestUserPermission,
    getFCMToken,
    listenToForegroundNotifications,
    listenToBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
    onDisplayNotification,
    onCreateTriggerNotification,
    onSendFcm,
  };
};

export default usePushNotification;
