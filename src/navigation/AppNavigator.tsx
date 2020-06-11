import React, { useRef, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeModules } from 'react-native';
import Constants from 'expo-constants';
import * as Localization from 'expo-localization';

import currentVersion from '../config/legal.json';
// import { connectToStore, addPurchaseListener, disconnectFromStore } from '../utils/payment'
// import Analytics from '../utils/analytics'
// import Messaging from '../utils/messaging'

import { IntroStackScreen, RootStackScreen } from './stacks';

// import Crashlytics from '../utils/crashlytics'
// import Authentication from '../utils/authentication'
// import Firestore from '../utils/firestore'
// import { isAndroid } from '../constants'

const ProdChecker = NativeModules.ProdChecker;

const AppNavigator = () => {
  // temp workaround because its not connected yet
  const agreedLegal = {
    privacy: {
      version: 1.0,
    },
    terms: {
      version: 1.0,
    },
  };
  const isIntroFinished = true;

  const [showOnboarding, setShowOnboarding] = useState(!isIntroFinished);
  const [initialRoute, setInitialRoute] = useState('Intro');

  /*
  const [firebaseConfig, setFirebaseConfig] = useState({
    environment: undefined,
    uid: undefined
  });
   */

  const navigationRef = useRef();
  const routeNameRef = useRef();

  useEffect(() => {
    const newPrivacy = currentVersion.privacy !== agreedLegal.privacy.version;
    const newTerms = currentVersion.terms !== agreedLegal.terms.version;

    const showLegal = newPrivacy || newTerms;
    const showIntro = !isIntroFinished;

    const showOnboardingStack = showLegal || showIntro;

    if (showOnboardingStack) {
      const initial = showLegal ? 'Legal' : 'Intro';
      setInitialRoute(initial);
    }

    setShowOnboarding(showOnboardingStack);
  }, [isIntroFinished, agreedLegal]);

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
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      {showOnboarding ? (
        <IntroStackScreen initialRouteName={initialRoute} />
      ) : (
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
