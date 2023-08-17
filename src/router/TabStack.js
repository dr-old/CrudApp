import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home, Setting} from '../containers/pages';
import {color as clr} from '../utils/styles';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  const tabBar = [
    {name: 'HomeTab', label: 'Home', icon: 'home', comp: Home},
    ,
    {name: 'SettingTab', label: 'Profile', icon: 'user', comp: Setting},
  ];

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 90 : 70, // for android 60
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          margin: 10,
          borderRadius: 10,
        },

        tabBarActiveTintColor: clr.green4,
        tabBarInactiveTintColor: clr.tgrey3,
      })}>
      {tabBar.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.comp}
          options={{
            headerShown: false,
            tabBarLabel: item.label,
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <Feather name={item.icon} color={color} size={20} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
