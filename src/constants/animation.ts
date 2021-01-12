import { Easing } from 'react-native';

export const animationSelect = (toValue: number) => ({
  toValue,
  duration: 150,
  easing: Easing.elastic(1.44),
  useNativeDriver: true,
});

export const animationSelectShadow = (toValue: number) => ({
  toValue,
  duration: 150,
  easing: Easing.inOut(Easing.ease),
  useNativeDriver: true,
});

export const animationFade = (toValue: number, duration = 50) => ({
  toValue,
  duration,
  easing: Easing.inOut(Easing.ease),
  useNativeDriver: true,
});

export const animationSlide = (toValue: number) => ({
  toValue,
  duration: 150,
  easing: Easing.inOut(Easing.ease),
  useNativeDriver: true,
});
