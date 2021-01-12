import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { IntroScreen, LegalScreen, MnemonicScreen } from '../../screens';

type IntroStackParamList = {
  Intro: undefined;
  Legal: undefined;
  Mnemonic: undefined;
};

const IntroStack = createStackNavigator<IntroStackParamList>();

const IntroStackScreen = ({}) => (
  <IntroStack.Navigator headerMode="none" initialRouteName="Intro">
    <IntroStack.Screen name="Intro" component={IntroScreen} />
    <IntroStack.Screen name="Legal" component={LegalScreen} />
    <IntroStack.Screen name="Mnemonic" component={MnemonicScreen} />
  </IntroStack.Navigator>
);

export default IntroStackScreen;
