import React from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon, { iconName as name } from '../Icon';
import {
  animationSelect,
  animationSelectShadow,
  colors,
  isSmallDevice,
} from '../../constants';
import fireHapticFeedback from '../../utils/hapticFeedback';

const DEFAULT_SIZE = isSmallDevice ? 48 : 56;
const DEFAULT_RADIUS = isSmallDevice ? 24 : 28;

export const IconButton = ({
  size = DEFAULT_SIZE,
  radius = DEFAULT_RADIUS,
  iconSize = 24,
  iconName = name.more,
  type = 'primary',
  onPress,
  hapticTypePress,
  style,
  disabled = false,
  loading = false,
}) => {
  let gradientColors;
  let iconColor;
  let shadowStyle;

  const handlePress = () => {
    if (!disabled) {
      fireHapticFeedback(hapticTypePress);
      onPress && onPress();
    }
  };

  /**
   * Animation
   */
  const scale = new Animated.Value(1);
  const shadowOpacity = new Animated.Value(0.16);

  const handleOnPressIn = () => {
    if (!disabled) {
      const configScale = animationSelect(0.98);
      const configShadow = animationSelectShadow(0);
      Animated.timing(scale, configScale).start();
      Animated.timing(shadowOpacity, configShadow).start();
    }
  };

  const handleOnPressOut = () => {
    if (!disabled) {
      const configScale = animationSelect(1);
      const configShadow = animationSelectShadow(0.16);
      Animated.timing(scale, configScale).start();
      Animated.timing(shadowOpacity, configShadow).start();
    }
  };

  switch (type) {
    case 'primary':
      gradientColors = [colors.primary300, colors.primary400];
      iconColor = colors.neutral000;
      shadowStyle = {
        shadowOpacity,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: colors.neutral900,
      };
      break;
    case 'secondary':
      gradientColors = [colors.primary100, colors.primary100];
      iconColor = colors.primary400;
      break;
    default:
      gradientColors = [colors.primary300, colors.primary400];
      iconColor = colors.neutral000;
      break;
  }

  return (
    <Touch
      onPress={handlePress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <Container style={[shadowStyle, { transform: [{ scale }] }, style]}>
        <Gradient
          style={{
            borderRadius: radius || DEFAULT_RADIUS,
            height: size || DEFAULT_SIZE,
            width: size || DEFAULT_SIZE,
            opacity: disabled ? 0.5 : 1,
          }}
          colors={gradientColors}
          start={[0, 1]}
          end={[1, 0]}
        >
          {loading ? (
            <ActivityIndicator color={iconColor} size="small" />
          ) : (
            <Icon size={iconSize} name={iconName} color={iconColor} />
          )}
        </Gradient>
      </Container>
    </Touch>
  );
};

const Touch = styled.TouchableWithoutFeedback``;

const Container = styled(Animated.View)`
  background: ${colors.neutral000};
`;

const Gradient = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
`;
