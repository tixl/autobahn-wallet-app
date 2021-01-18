import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StartScreen,
  LegalScreen,
  MnemonicScreen,
  MnemonicConfirmScreen,
  LoginScreen,
} from '../../screens';

export type IntroStackParamList = {
  Start: undefined;
  Legal: undefined;
  Mnemonic: undefined;
  MnemonicConfirm: { mnemonic: string[] };
  Login: undefined;
};

const IntroStack = createStackNavigator<IntroStackParamList>();

const IntroStackScreen = ({}) => (
  <IntroStack.Navigator headerMode="none" initialRouteName="Start">
    <IntroStack.Screen name="Start" component={StartScreen} />
    <IntroStack.Screen name="Legal" component={LegalScreen} />
    <IntroStack.Screen name="Mnemonic" component={MnemonicScreen} />
    <IntroStack.Screen
      name="MnemonicConfirm"
      component={MnemonicConfirmScreen}
    />
    <IntroStack.Screen name="Login" component={LoginScreen} />
  </IntroStack.Navigator>
);

export default IntroStackScreen;
