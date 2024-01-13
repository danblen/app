import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Vip from './pages/vip';
import Home from './pages/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Album from './pages/album';
// import User from './pages/user';

const Tab = createBottomTabNavigator();
function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homes" component={Home} />
      <Stack.Screen name="as" component={Vip} />
      <Stack.Screen name="Hasdome" component={Home} />
    </Stack.Navigator>
  );
}
function UserTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homes" component={Home} />
    </Stack.Navigator>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="首页" component={HomeTab} />
      <Tab.Screen name="修图" component={Vip} />
      <Tab.Screen name="作品" component={Album} />
      <Tab.Screen name="我的" component={UserTab} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
