import React from 'react';
import { TextStyle, Text as RNText } from 'react-native';
import { textSize, fonts } from '../../constants';

type FontWeightTypes = 'regular' | 'bold' | 'semiBold' | 'light';

type TextAlignTypes = 'left' | 'right' | 'center';

type Props = {
  children: React.ReactNode | undefined;
  fontWeight?: FontWeightTypes;
  fontColor?: string;
  fontSize?: number;
  textAlign?: TextAlignTypes;
  alignToBottom?: boolean;
  numberOfLines?: number;
  maxWidth?: number;
  style?: TextStyle | TextStyle[];
  onPress?(): void;
};

export const Text: React.FC<Props> = ({
  children,
  // Define default font family
  fontWeight = fonts.regular,
  // Define default text size
  fontSize = textSize.m,
  // Define default text color
  fontColor = 'black',
  numberOfLines = undefined,
  textAlign = 'center',
  alignToBottom = false,
  style = {},
  ...props
}) => {
  // Get font family
  var font: string = fonts.regular;
  switch (fontWeight) {
    case 'regular':
      font = fonts.regular;
      break;
    case 'bold':
      font = fonts.bold;
      break;
    case 'semiBold':
      font = fonts.semiBold;
      break;
    case 'light':
      font = fonts.light;
      break;
    default:
      font = fonts.regular;
      break;
  }

  return (
    <RNText
      style={[
        {
          fontFamily: font,
          fontSize: fontSize,
          color: fontColor,
          textAlign: textAlign,
          // Vertically align text to bottom (workaround, as textAlignVertical only works on Android devices)
          bottom: alignToBottom ? -(0.3 * fontSize) : 0,
        },
        props.maxWidth ? { maxWidth: props.maxWidth } : {},
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};
