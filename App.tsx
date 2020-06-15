// https://github.com/software-mansion/react-native-gesture-handler/issues/320#issuecomment-443815828
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, YellowBox } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, connect } from 'react-redux';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
// import QuickActions from 'react-native-quick-actions';

import AppNavigator from './src/navigation/AppNavigator';
import { persistor, store } from './src/redux/store';
import useCachedResources from './src/hooks/useCachedResources';
import './src/i18n';

/**
 * Expose native navigation container components to React Native
 * https://github.com/kmagiera/react-native-screens
 */

enableScreens();

// QuickActions.clearShortcutItems();

YellowBox.ignoreWarnings([]);

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppearanceProvider>
            <SafeAreaProvider>
              <AppNavigator />
            </SafeAreaProvider>
          </AppearanceProvider>
        </PersistGate>
      </Provider>
    );
  }
}
