import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';
import moment from 'moment';
import Scheduler from '../atoms/Scheduler';
import usePushNotification from '../../config/useNotification';

interface TileArticleProps {
  item: {
    id: number;
    title: string;
    description: string;
    reminderStartDate: string;
    reminderEndDate: string;
    reminderStatus: string;
    createdAt: string;
    updatedAt: string;
  };
  onClick: () => void;
}

const TileArticle: React.FC<TileArticleProps> = ({item, onClick}) => {
  const {onSendFcm} = usePushNotification();
  const handleScheduledTask = () => {
    onSendFcm({
      title: item.title,
      body: `${moment(item.reminderStartDate).format('HH:mm')} - ${moment(
        item.reminderEndDate,
      ).format('HH:mm')}`,
    });
    console.log('Scheduled task executed!');
  };
  console.log(item);
  // Schedule the task for a specific date and time
  const scheduledTime = new Date(item.reminderStartDate); // Replace with your desired schedule time

  scheduledTime.setMinutes(scheduledTime.getMinutes() - 5);
  console.log(moment(scheduledTime).format('YYYY-MM-DD HH:mm'));
  return (
    <>
      <Scheduler
        scheduledTime={scheduledTime}
        onSchedule={handleScheduledTask}
      />
      <TouchableOpacity onPress={onClick} style={stylesCust.article}>
        <View style={stylesCust.articleBody}>
          <ButtonIcon type={stylesCust.buttonType} name="calendar" size={20} />
          <Divider width={10} height={0} />
          <View style={stylesCust.articleCardText}>
            <Text style={[styles.h5()]} numberOfLines={2}>
              {item.title}
            </Text>
            <Text
              numberOfLines={2}
              style={[styles.textBase(12, color.tgrey, 'textRegular', 'none')]}>
              {item.description}
            </Text>
            <Divider height={5} />
            <Text style={[styles.p5(color.green4)]}>
              {moment(item.createdAt).format('DD MMM YYYY HH:mm')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const stylesCust = StyleSheet.create({
  user: {
    flex: 1,
    flexDirection: 'row',
  },
  article: {
    flex: 1,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: color.white,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  articleBody: {flex: 1, padding: 15, flexDirection: 'row'},
  articleCard: {
    height: 80,
    width: 80,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  articleCardText: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  articleCardBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  category: {
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: color.green5,
    borderRadius: 15,
  },
  buttonType: {
    backgroundColor: color.green4,
    borderColor: color.green4,
    color: color.white,
  },
});

export default TileArticle;
