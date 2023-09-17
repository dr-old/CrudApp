import {useCallback, useEffect} from 'react';
import notifee from '@notifee/react-native';
import useNotifee from '../../config/useNotifee';

function Notification() {
  const {onDisplayNotification} = useNotifee();
  const onDisplayNotificationMemoized = useCallback(onDisplayNotification, [
    onDisplayNotification,
  ]);

  useEffect(() => {
    const onNotificationTrigger = async notification => {
      // Handle the scheduled notification here
      console.log('Scheduled Notification Triggered:', notification);

      // Customize the handling logic based on notification data
      if (notification?.type === 3) {
        onDisplayNotificationMemoized({
          title: notification.detail.notification.title,
          body: notification.detail.notification.body,
        });
        // Perform a custom action when the notification is tapped
      }
    };

    const unsubscribeForeground = notifee.onForegroundEvent(
      onNotificationTrigger,
    );
    const unsubscribeBackground = notifee.onBackgroundEvent(
      onNotificationTrigger,
    );

    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, [onDisplayNotificationMemoized]);

  return null;

  // Your component's rendering and other code here
}

export default Notification;
