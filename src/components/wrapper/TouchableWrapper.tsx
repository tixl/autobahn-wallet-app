import React, { useState } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import {
  animationSelect,
  animationSelectShadow,
  colors,
} from '../../constants';
import fireHapticFeedback, {
  HapticPressType,
} from '../../utils/hapticFeedback';

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  hapticPressType?: HapticPressType;
  disableHapticPress?: boolean;
};

export const TouchableWrapper: React.FC<Props> = ({
  children,
  onPress,
  disabled = false,
  hapticPressType = 'selection',
  disableHapticPress = false,
}) => {
  const handlePress = () => {
    if (onPress && !disabled) {
      !disableHapticPress && fireHapticFeedback(hapticPressType);
      onPress();
    } else {
      !disableHapticPress && fireHapticFeedback('notificationError');
    }
  };

  // Animation
  const [scale] = useState(new Animated.Value(1));
  const [shadowOpacity] = useState(new Animated.Value(0.16));

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
    <TouchContainer
      disabled={disabled}
      onPress={handlePress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <Container
        style={{
          shadowOpacity,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 3 },
          shadowColor: colors.neutral900,
          transform: [{ scale }],
        }}
      >
        {children}
      </Container>
    </TouchContainer>
  );
};

const TouchContainer = styled.TouchableWithoutFeedback``;

const Container = styled(Animated.View)`
  flex-grow: 1;
`;
