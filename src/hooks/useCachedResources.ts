import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { fonts } from '../constants';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          [fonts.poppins]: require('../assets/fonts/Poppins-Regular.ttf'),
          [fonts.regular]: require('../assets/fonts/Poppins-Regular.ttf'),
          [fonts.semiBold]: require('../assets/fonts/Poppins-SemiBold.ttf'),
          [fonts.bold]: require('../assets/fonts/Poppins-Bold.ttf'),
          [fonts.light]: require('../assets/fonts/Poppins-Light.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
