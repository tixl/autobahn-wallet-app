import React, { useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeModules } from 'react-native';
// import Constants from 'expo-constants';
// import * as Localization from 'expo-localization';

import currentVersion from '../config/legal.json';
// import Analytics from '../utils/analytics';
// import Messaging from '../utils/messaging';
// import Crashlytics from '../utils/crashlytics';
// import Authentication from '../utils/authentication';
// import Firestore from '../utils/firestore';
// import { isAndroid } from '../constants';

import LinkingConfiguration from './LinkingConfiguration';

import { IntroStackScreen, RootStackScreen } from './stacks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import { useAccountChain } from '../hooks/useAccountChain';
import {
  reloadIndexedChains,
  updateBlockStatesNetwork,
} from '@tixl/tixl-sdk-js/redux/chains/actions';
import { useTaskRunner } from '../hooks/useTaskRunner';
import { useScanHistory } from '../hooks/useScanHistory';

const ProdChecker = NativeModules.ProdChecker;

const AppNavigator = () => {
  const dispatch = useDispatch();
  const keySet = useSelector(getKeys);
  const accountChain = useAccountChain();
  const state = useSelector((state: RootState) => state);
  const scanHistory = useScanHistory();

  // Start task runner to scan for incoming tasks
  useTaskRunner();

  React.useEffect(() => {
    if (!keySet) return;
    console.log('your AN address', keySet.sig.publicKey);
  }, [keySet]);

  useEffect(
    () => {
      setTimeout(() => {
        if (accountChain) {
          dispatch(reloadIndexedChains());
          dispatch(updateBlockStatesNetwork());
        }

        scanHistory();
      }, 250);
    },
    // eslint-disable-next-line
    [
      // do not add dependencies here
    ]
  );

  // Defindes is navigation tracking has been accepted (needs to be toogable in settings and will be asked on new device --> part of local storage)
  const trackingAccepted = false;

  const navigationRef = useRef();
  const routeNameRef = useRef();

  const onStateChange = () => {
    // https://reactnavigation.org/docs/en/next/screen-tracking.html
    const navigation = navigationRef.current;

    /*
    if (navigation) {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = getActiveRouteName(
        // Get the root navigator state to find the active route
        navigation.getRootState()
      );

      if (previousRouteName !== currentRouteName) {
        // The line below uses the @react-native-firebase/analytics tracker
        Analytics.setCurrentScreen(currentRouteName, currentRouteName);
        // https://blog.theodo.com/2018/01/building-google-analytics-funnel-firebase-react-native/
        Analytics.logEvent(`Screen_${currentRouteName}`, {})
      }

      // Save the current route name for later comparision
      routeNameRef.current = currentRouteName
    }
     */
  };

  return (
    // @ts-ignore
    <NavigationContainer
      ref={navigationRef}
      linking={LinkingConfiguration}
      onStateChange={onStateChange}
    >
      {accountChain === null ? <IntroStackScreen /> : <RootStackScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
