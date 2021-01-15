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
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getAccountChain } from '@tixl/tixl-sdk-js/redux/chains/selectors';

const ProdChecker = NativeModules.ProdChecker;

const AppNavigator = () => {
  // const isIntroFinished = false;
  // const isIntroFinished = useSelector(
  //   (state: RootState) => state.intro.appIntroFinished
  // );

  // Defines is user is loggedIn
  const userToken = useSelector((state: RootState) => state.intro.userToken);

  const accountChain = useSelector(getAccountChain);

  console.log(accountChain);

  // const [showIntroStack, setShowIntroStack] = useState(true);
  // const [introStackInitialRoute, setIntroStackInitialRoute] = useState('Intro');

  // const [showOnboarding, setShowOnboarding] = useState(!isIntroFinished);
  // const [initiaIntrolRoute, setInitialIntroRoute] = useState('Intro');

  // Moving this to Tab navigator
  // useEffect(() => {
  //   const newPrivacy = currentVersion.privacy !== agreedLegal.privacy.version;
  //   const newTerms = currentVersion.terms !== agreedLegal.terms.version;

  //   const showLegal = newPrivacy || newTerms;
  //   const showIntro = !isIntroFinished;

  //   const showOnboardingStack = showLegal || showIntro;

  //   if (showOnboardingStack) {
  //     const initial = showLegal ? 'Legal' : 'Intro';
  //     setInitialRoute(initial);
  //   }

  //   setShowOnboarding(showOnboardingStack);
  // }, [isIntroFinished, agreedLegal]);

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
