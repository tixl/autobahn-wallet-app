import React, { useRef, useState, useEffect } from 'react';
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
import { getAccountChain } from '@tixl/tixl-sdk-js/redux/chains/selectors';
import { createReceiveTask } from '@tixl/tixl-sdk-js/redux/tasks/actions';
import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import { useAccountChain } from '../hooks/useAccountChain';
import { generateKeys } from '@tixl/tixl-sdk-js/redux/keys/actions';
import {
  createAccountChain,
  updateBlockStatesNetwork,
} from '@tixl/tixl-sdk-js/redux/chains/actions';
import { getUnspent } from '@tixl/tixl-sdk-js/requests/getUnspent';
import { useTaskRunner } from '../hooks/useTaskRunner';

const ProdChecker = NativeModules.ProdChecker;

const AppNavigator = () => {
  const dispatch = useDispatch();
  const keySet = useSelector(getKeys);
  const accountChain = useAccountChain();
  const state = useSelector((state: RootState) => state);
  const receiveTasks = useSelector((state: RootState) => state.tasks.receive);

  // Start task runner to scan for incoming tasks
  useTaskRunner();

  // initially create the wallet keyset (this will later be handled inside the intro setup)
  React.useEffect(() => {
    (async () => {
      if (keySet) return;

      // dont call crypto immediately, usually these are user initiated anyways
      await new Promise((resolve) => setTimeout(resolve, 100));

      dispatch(generateKeys());
    })();
  }, []);

  // create wallet by loading account chain (for keyset)
  React.useEffect(() => {
    if (!keySet) return;
    if (accountChain) return;

    // create account chain
    dispatch(createAccountChain());
  }, [keySet]);

  // update state for blocks
  React.useEffect(() => {
    if (!accountChain) return;

    // lookup new block states
    dispatch(updateBlockStatesNetwork());
  }, [accountChain]);

  // handle incoming send blocks (use task runner later)
  React.useEffect(() => {
    if (!keySet) return;

    (async () => {
      console.log('your AN address', keySet.sig.publicKey);

      // find new blocks to receive
      const res = await getUnspent(keySet.sig.publicKey);

      // create receive tasks
      res.blocks.forEach((send) => {
        dispatch(createReceiveTask(send.signature, undefined, send.symbol));
      });
    })();
  }, [keySet]);

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
