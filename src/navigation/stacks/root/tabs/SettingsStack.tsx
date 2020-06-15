import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsScreen } from '../../../../screens';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({ initialRouteName = 'Settings' }) => (
  <SettingsStack.Navigator
    headerMode="none"
    initialRouteName={initialRouteName}
  >
    <SettingsStack.Screen name="Settings" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

export default SettingsStackScreen;
