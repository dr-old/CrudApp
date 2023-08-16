import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  Cart,
  Checkout,
  Checkouts,
  Favorite,
  Form,
  Topup,
  Product,
  Products,
  Setting,
  Typography,
  TopupConfirm,
  PaymentMethod,
  PaymentStatus,
  Home,
  Employees,
  Employee,
} from '../containers/pages';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Home', comp: TabStack, header: false},
    {name: 'Form', comp: Form, header: false},
    {name: 'Button', comp: Button, header: false},
    {name: 'Setting', comp: Setting, header: false},
    {name: 'Typography', comp: Typography, header: false},
    {name: 'Product', comp: Product, header: false},
    {name: 'Favorite', comp: Favorite, header: false},
    {name: 'Products', comp: Products, header: false},
    {name: 'Cart', comp: Cart, header: false},
    {name: 'Checkout', comp: Checkout, header: false},
    {name: 'Checkouts', comp: Checkouts, header: false},
    {name: 'Topup', comp: Topup, header: false},
    {name: 'TopupConfirm', comp: TopupConfirm, header: false},
    {name: 'PaymentMethod', comp: PaymentMethod, header: false},
    {name: 'PaymentStatus', comp: PaymentStatus, header: false},
    {name: 'Employees', comp: Employees, header: false},
    {name: 'Employee', comp: Employee, header: false},
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
