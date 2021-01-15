import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StartScreen, LegalScreen, MnemonicScreen } from '../../screens';

type IntroStackParamList = {
  Start: undefined;
  Legal: undefined;
  Mnemonic: undefined;
};

const IntroStack = createStackNavigator<IntroStackParamList>();

const IntroStackScreen = ({}) => (
  <IntroStack.Navigator headerMode="none" initialRouteName="Start">
    <IntroStack.Screen name="Start" component={StartScreen} />
    <IntroStack.Screen name="Legal" component={LegalScreen} />
    <IntroStack.Screen name="Mnemonic" component={MnemonicScreen} />
  </IntroStack.Navigator>
);

export default IntroStackScreen;
