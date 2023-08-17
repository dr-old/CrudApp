import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import DashboardStack from './DashboardStack';
import {useSelector} from 'react-redux';
import {Login, Splash} from '../containers/pages';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

const Stack = createNativeStackNavigator();

function Router() {
  const user = useSelector(state => state.generalReducer.user);
  const page = [
    {name: 'Splash', comp: Splash, header: false},
    {name: 'Login', comp: Login, header: false},
  ];
  return (
    <NavigationContainer ref={navigationRef}>
      {user?.token ? (
        <DashboardStack />
      ) : (
        <Stack.Navigator initialRouteName="Splash">
          {page.map((item, index) => {
            return (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.comp}
                options={{headerShown: item.header}}
              />
            );
          })}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Router;
