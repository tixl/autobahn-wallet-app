import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './root/TabNavigator';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator mode="modal" headerMode="none" initialRouteName="Tab">
    <RootStack.Screen name="Tab" component={TabNavigator} />
  </RootStack.Navigator>
);

export default RootStackScreen;
