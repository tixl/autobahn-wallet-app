import { Easing } from 'react-native';

export const animationSelect = (toValue) => ({
  toValue,
  duration: 150,
  easing: Easing.elastic(1.44),
  useNativeDriver: true
});

export const animationSelectShadow = (toValue) => ({
  toValue,
  duration: 150,
  easing: Easing.inOut(Easing.ease),
  useNativeDriver: true
});

export const animationFade = (toValue, duration = 50) => ({
  toValue,
  duration,
  easing: Easing.inOut(Easing.ease),
  useNativeDriver: true
});

export const animationSlide = (toValue) => ({
  toValue,
  duration: 150,
  easing: Easing.inOut(Easing.ease),
  useNativeDriver: true
});
