import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// Navigator imports
import TabNavigator from './root/TabNavigator';

// Screen imports
import { AssetDetailScreen } from '../../screens';
import { ExampleAsset } from '../../redux/reducer/example';

export type RootStackParamList = {
  Tab: undefined;
  AssetDetail: { asset: ExampleAsset };
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
    <RootStack.Screen name="AssetDetail" component={AssetDetailScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
