import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WalletScreen } from '../../../../screens';

const WalletStack = createStackNavigator();

const WalletStackScreen = ({ initialRouteName = 'Wallet' }) => (
  <WalletStack.Navigator headerMode="none" initialRouteName={initialRouteName}>
    <WalletStack.Screen name="Wallet" component={WalletScreen} />
  </WalletStack.Navigator>
);

export default WalletStackScreen;
