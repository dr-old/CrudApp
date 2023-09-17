import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';
import moment from 'moment';
const useNotifee = () => {
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
    date.setMinutes(date.getMinutes() + 2);
    console.log('time', moment(date).format('YYYY-MM-DD HH:mm'));

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };
    console.log('trigger', trigger);

    // Create a trigger notification
    const result = await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger,
    );
    console.log('result', result);
  }

  return {onDisplayNotification, onCreateTriggerNotification};
};
export default useNotifee;
