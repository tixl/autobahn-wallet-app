import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Navigator imports
import TabNavigator from './root/TabNavigator';

// Screen imports
import { CurrencyDetailScreen } from '../../screens';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator
    mode="modal"
    initialRouteName="Tab"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      gestureEnabled: true,
      // Activate iOS style modal presentation
      ...TransitionPresets.ModalPresentationIOS,
    })}
  >
    <RootStack.Screen name="Tab" component={TabNavigator} />
    <RootStack.Screen name="CurrencyDetail" component={CurrencyDetailScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
