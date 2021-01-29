import React from 'react';
import { colors, fonts, shapes } from '../../constants';
import SwitchSelector, {
  ISwitchSelectorProps,
} from 'react-native-switch-selector';

export const Selector: React.FC<ISwitchSelectorProps> = (props) => {
  return (
    <SwitchSelector
      {...props}
      selectedColor={'white'}
      borderColor={colors.LIGHT_BLUE}
      buttonColor={colors.LIGHT_BLUE}
      hasPadding
      textColor={colors.LIGHT_BLACK}
      borderRadius={shapes.borderRadius}
      textStyle={{ fontFamily: fonts.semiBold }}
      selectedTextStyle={{ fontFamily: fonts.semiBold }}
    />
  );
};

// font-family: ${fonts.regular};
// font-size: ${textSize.s}px;
