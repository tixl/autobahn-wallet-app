// https://github.com/software-mansion/react-native-gesture-handler/issues/320#issuecomment-443815828
import 'react-native-gesture-handler';

import * as React from 'react';
import { LogBox } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, connect } from 'react-redux';
// @ts-ignore
import { PersistGate } from 'redux-persist/integration/react';
// import QuickActions from 'react-native-quick-actions';

import '@tixl/tixl-sdk-js/react-native/worker';
import AppNavigator from './src/navigation/AppNavigator';
import { persistor, store } from './src/redux/store';
import useCachedResources from './src/hooks/useCachedResources';
import './src/i18n';
import { StatusBar } from 'expo-status-bar';

/**
 * Expose native navigation container components to React Native
 * https://github.com/kmagiera/react-native-screens
 */
enableScreens();

// QuickActions.clearShortcutItems();

LogBox.ignoreLogs(['VirtualizedList', 'Native splash screen']);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppearanceProvider>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <AppNavigator />
          </SafeAreaProvider>
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
}
