import { Dimensions, Platform } from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const isSmallDevice = windowWidth < 375;
