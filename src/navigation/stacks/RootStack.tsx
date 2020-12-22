import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Navigator imports
import TabNavigator from './root/TabNavigator';

// Screen imports
import { CurrencyDetailScreen } from '../../screens';

type RootStackParamList = {
  Tab: undefined;
  CurrencyDetail: { currency: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen = () => (
  <RootStack.Navigator
    mode="modal"
    initialRouteName="Tab"
    screenOptions={({ route, navigation }) => ({
      headerShown: false,
      gestureEnabled: true,
      // Activate iOS style modal presentation (could be adapted for Android)
      ...TransitionPresets.ModalPresentationIOS,
    })}
  >
    <RootStack.Screen name="Tab" component={TabNavigator} />
    <RootStack.Screen name="CurrencyDetail" component={CurrencyDetailScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
