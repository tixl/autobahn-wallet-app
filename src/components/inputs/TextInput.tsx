import React, { useState } from 'react';
import styled from 'styled-components/native';
import { colors, fonts, shapes, spacing, textSize } from '../../constants';
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputChangeEventData,
} from 'react-native';
import { composeInitialProps } from 'react-i18next/*';

export type InputType = 'mail';

type StyledProps = {
  focused: boolean;
};

type Props = {
  type: InputType;
  value: string;
  placeholder?: string;
  autoFocus?: boolean;
  onChangeText?: (newValue: string) => any;
};

export const TextInput: React.FC<Props> = ({
  type = 'mail',
  placeholder = '',
  value = '',
  onChangeText,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <CustomTextInput
      focused={focused}
      placeholder={placeholder}
      value={value}
      selectionColor={colors.LIGHT_BLUE}
      onChangeText={(newValue) => onChangeText && onChangeText(newValue)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    ></CustomTextInput>
  );
};

const CustomTextInput = styled.TextInput<StyledProps>`
  height: 35px;
  padding: ${spacing.xs}px;
  border-radius: ${shapes.borderRadiusSmall}px;
  border-width: ${(props: StyledProps) => (props.focused ? '2px' : '1px')};
  border-color: ${colors.LIGHT_BLACK};
  border-color: ${(props: StyledProps) =>
    props.focused ? colors.LIGHT_BLUE : 'grey'};
  font-family: ${fonts.regular};
  font-size: ${textSize.s}px;
`;
