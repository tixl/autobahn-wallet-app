import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { IntroScreen, LegalScreen } from '../../screens';

type IntroStackParamList = {
  Intro: undefined;
  Legal: undefined;
};

const IntroStack = createStackNavigator<IntroStackParamList>();

const IntroStackScreen = ({ initialRouteName = 'Intro' }) => (
  <IntroStack.Navigator headerMode="none" initialRouteName={initialRouteName}>
    <IntroStack.Screen name="Intro" component={IntroScreen} />
    <IntroStack.Screen name="Legal" component={LegalScreen} />
  </IntroStack.Navigator>
);

export default IntroStackScreen;
