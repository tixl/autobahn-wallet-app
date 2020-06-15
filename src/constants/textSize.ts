import { isSmallDevice } from './platform';

const textSize = {
  xxxs: 8,
  xxs: 12,
  xs: isSmallDevice ? 12 : 14,
  s: isSmallDevice ? 14 : 16,
  m: isSmallDevice ? 16 : 18,
  l: isSmallDevice ? 18 : 20,
  xl: isSmallDevice ? 20 : 24,
  xxl: isSmallDevice ? 24 : 32,
  xxxl: isSmallDevice ? 56 : 80,
};

export default textSize;
