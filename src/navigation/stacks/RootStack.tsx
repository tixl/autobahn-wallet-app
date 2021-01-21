import React, { useEffect, useState } from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Navigator imports
import TabNavigator from './root/TabNavigator';

// Screen imports
import { AssetDetailScreen, LegalScreen } from '../../screens';
import { AssetSymbol } from '@tixl/tixl-types';

export type RootStackParamList = {
  Tab: undefined;
  AssetDetail: { asset: AssetSymbol };
  Legal: { legalInfo: string };
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackScreen = () => {
  return (
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
      <RootStack.Screen name="AssetDetail" component={AssetDetailScreen} />
      <RootStack.Screen
        name="Legal"
        component={LegalScreen}
        options={{ gestureEnabled: false }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
