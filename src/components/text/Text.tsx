import React from 'react';
import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';

import { colors } from '../../constants';

const { multiply, divide } = Animated;

// type Props = {
//   fontSize: string;
//   fontColor: 
// };

const Text = (props) => {
  const {
    fontSize,
    fontColor,
    fontWeight,
    fontHeight,
    textAlign = 'left',
    allowFontScaling = false,
    numberOfLines,
    adjustsFontSizeToFit = false,
    ellipsizeMode = 'tail',
    style,
    children,
    onPress,
  } = props;

  const lineHeightFactor = fontSize > 24 ? 1.2 : 1.4;
  const lineHeight =
    fontHeight || multiply(divide(multiply(fontSize, lineHeightFactor), 4), 4);

  const handlePress = () => {
    onPress && onPress();
  };

  if (onPress === undefined) {
    return (
      <StyledText
        fontColor={fontColor}
        weight={fontWeight}
        textAlign={textAlign}
        style={[{ fontSize, lineHeight }, style]}
        allowFontScaling={allowFontScaling}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
      >
        {children}
      </StyledText>
    );
  }

  return (
    <StyledText
      onPress={handlePress}
      suppressHighlighting
      fontColor={fontColor}
      weight={fontWeight}
      textAlign={textAlign}
      style={[{ fontSize, lineHeight }, style]}
    >
      {children}
    </StyledText>
  );
};

export default Text;

/**
 * Styled Component
 */
const StyledText = styled(Animated.Text)`
  font-family: 'Poppins-Regular';
  color: ${(props) => props.fontColor || colors.neutral900};
  text-align: ${(props) => props.textAlign && props.textAlign};
  ${({ weight }) =>
    weight === 'bold' &&
    css`
      font-family: 'Poppins-Bold';
    `};
  ${({ weight }) =>
    weight === 'semiBold' &&
    css`
      font-family: 'Poppins-SemiBold';
    `};
`;
