import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#2ccbb9',
        drawerActiveTintColor: '#fff',
        marginTop: 16,
        drawerLabelStyle: {
          fontSize: 20,
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Shorten link",
          drawerIcon: ({ focused, size, color }) => (<Ionicons color={color} name={focused ? 'cube' : 'cube-outline'} size={size} />),
          headerTintColor: '#fff',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle: ''
        }}
      />

      <Drawer.Screen
        name="MyLinks"
        component={MyLinks}
        options={{
          title: "My links",
          drawerIcon: ({ focused, size, color }) => (<Ionicons color={color} name={focused ? 'stats-chart' : 'stats-chart-outline'} size={size} />),
          headerTintColor: '#fff',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitle: ''
        }}
      />
    </Drawer.Navigator>
  )
}