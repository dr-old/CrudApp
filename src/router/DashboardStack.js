import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Setting, Home, Employee, EmployeeAdd} from '../containers/pages';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Home', comp: Home, header: false},
    {name: 'Setting', comp: Setting, header: false},
    {name: 'Employee', comp: Employee, header: false},
    {name: 'EmployeeAdd', comp: EmployeeAdd, header: false},
  ];

  return (
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
  );
}

export default DashboardStack;
