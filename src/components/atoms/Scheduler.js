import {useEffect} from 'react';

function Scheduler({scheduledTime, onSchedule}) {
  useEffect(() => {
    const now = new Date().getTime();
    const targetTime = new Date(scheduledTime).getTime();

    if (targetTime <= now) {
      // The scheduled time has already passed, do not schedule the task
      return;
    }

    const delay = targetTime - now;

    const timer = setTimeout(() => {
      // This function will be called at the scheduled time
      onSchedule();
    }, delay);

    return () => {
      // Clean up the timer if the component unmounts before the scheduled time
      clearTimeout(timer);
    };
  }, [scheduledTime, onSchedule]);

  return null;
}

export default Scheduler;
