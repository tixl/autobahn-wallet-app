import React from 'react';
import { Animated, ActivityIndicator, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  animationSelect,
  animationSelectShadow,
  isSmallDevice,
  textSize,
  colors,
  spacing,
  shapes,
} from '../../constants';
import fireHapticFeedback, {
  HapticPressType,
} from '../../utils/hapticFeedback';
import { Text } from '../text/Text';
import { TouchableWrapper } from '../wrapper/TouchableWrapper';
import { NumericLiteral } from 'typescript';

export type ButtonType = 'primary' | 'secondary' | 'cancel';

type Props = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  borderRadius?: number;
  type?: ButtonType;
  onPress: () => void;
  hapticPressType?: HapticPressType;
  style?: ViewStyle;
};

export const Button: React.FC<Props> = ({
  label = 'Label',
  disabled = false,
  loading = false,
  type = 'primary',
  hapticPressType = 'selection',
  borderRadius = shapes.borderRadius,
  onPress,
  style = {},
}) => {
  let gradientColors;
  let fontColor;

  switch (type) {
    case 'primary':
      gradientColors = [colors.BLUE, colors.DARK_BLUE];
      fontColor = colors.WHITE;
      break;
    case 'secondary':
      gradientColors = ['white', 'white'];
      fontColor = colors.BLUE;
      break;
    case 'cancel':
      gradientColors = [colors.RED, colors.RED];
      fontColor = colors.WHITE;
      break;
    default:
      gradientColors = [colors.primary300, colors.primary400];
      fontColor = colors.neutral000;
      break;
  }

  return (
    <TouchableWrapper
      onPress={onPress}
      disabled={disabled}
      {...hapticPressType}
    >
      <Gradient
        colors={gradientColors}
        start={[0, 1]}
        end={[1, 0]}
        pointerEvents="none"
        style={[
          {
            height: isSmallDevice ? 48 : 56,
            opacity: disabled ? 0.5 : 1,
            borderRadius: borderRadius,
          },
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={fontColor} size="small" />
        ) : (
          <Text
            fontColor={fontColor}
            fontSize={textSize.m}
            fontWeight="semiBold"
          >
            {label}
          </Text>
        )}
      </Gradient>
    </TouchableWrapper>
  );
};

const Gradient = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  padding-left: ${spacing.s}px;
  padding-right: ${spacing.s}px;
`;
