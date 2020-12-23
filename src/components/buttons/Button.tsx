import React from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  animationSelect,
  animationSelectShadow,
  isSmallDevice,
  textSize,
  colors,
  spacing,
} from '../../constants';
import fireHapticFeedback from '../../utils/hapticFeedback';
import { Text } from '../text/Text';

const Button = ({
  borderRadius,
  onPress,
  type = 'primary',
  label = 'Label',
  hapticTypePress,
  disabled = false,
  loading = false,
  style,
}) => {
  let gradientColors;
  let fontColor;

  const handlePress = () => {
    if (!disabled) {
      fireHapticFeedback(hapticTypePress);
      onPress && onPress();
    }
  };

  switch (type) {
    case 'primary':
      gradientColors = [colors.primary300, colors.primary400];
      fontColor = colors.neutral000;
      break;
    case 'secondary':
      gradientColors = ['transparent', 'transparent'];
      fontColor = colors.primary400;
      break;
    default:
      gradientColors = [colors.primary300, colors.primary400];
      fontColor = colors.neutral000;
      break;
  }

  /**
   * Animation
   */
  const scale = new Animated.Value(1);
  const shadowOpacity = new Animated.Value(0.16);

  const handleOnPressIn = () => {
    const configScale = animationSelect(0.98);
    const configShadow = animationSelectShadow(0);
    Animated.timing(scale, configScale).start();
    Animated.timing(shadowOpacity, configShadow).start();
  };

  const handleOnPressOut = () => {
    const configScale = animationSelect(1);
    const configShadow = animationSelectShadow(0.16);
    Animated.timing(scale, configScale).start();
    Animated.timing(shadowOpacity, configShadow).start();
  };

  return (
    <Touch
      onPress={handlePress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      {...borderRadius}
    >
      <Container
        style={[
          {
            shadowOpacity,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 4 },
            shadowColor: colors.neutral900,
            transform: [{ scale }],
          },
          style,
        ]}
      >
        <Gradient
          colors={gradientColors}
          start={[0, 1]}
          end={[1, 0]}
          pointerEvents="none"
          style={{
            height: isSmallDevice ? 48 : 56,
            borderRadius: borderRadius || 8,
            opacity: disabled ? 0.5 : 1,
          }}
        >
          {loading ? (
            <ActivityIndicator color={fontColor} size="small" />
          ) : (
            <Text
              fontColor={fontColor}
              fontSize={textSize.l}
              fontWeight="semiBold"
            >
              {label}
            </Text>
          )}
        </Gradient>
      </Container>
    </Touch>
  );
};

export default Button;

const Container = styled(Animated.View)``;

const Touch = styled.TouchableWithoutFeedback`
  overflow: visible;
`;

const Gradient = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  padding-left: ${spacing.s}px;
  padding-right: ${spacing.s}px;
`;
