import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, shapes, spacing, textSize } from '../../constants';
import { Switch } from 'react-native';

type Props = {
  label?: string;
  input?: boolean;
  onChangeText?: (newValue: string) => any;
};

type StyledProps = {
  input: boolean;
};

export const MnemonicWord: React.FC<Props> = ({
  label = '',
  input = false,
  onChangeText,
}) => {
  return (
    <Container input={input}>
      {input ? (
        <TextInput
          selectionColor={colors.WHITE}
          onChangeText={(newValue) => onChangeText && onChangeText(newValue)}
        ></TextInput>
      ) : (
        <Text>{label}</Text>
      )}
    </Container>
  );
};

const Container = styled.View<StyledProps>`
  flex: ${(props: StyledProps) => (props.input ? 1 : 'none')};
  padding: ${spacing.xs}px ${spacing.s}px;
  margin-right: ${spacing.s}px;
  border-radius: ${shapes.borderRadiusBig}px;
  background-color: ${(props: StyledProps) =>
    props.input ? colors.LIGHT_BLUE : colors.BLUE};
`;

const Text = styled.Text`
  color: ${colors.WHITE};
  font-family: ${fonts.regular};
  text-align: center;
  font-size: ${textSize.m}px;
`;

const TextInput = styled.TextInput`
  color: ${colors.WHITE};
  font-family: ${fonts.regular};
  text-align: left;
  font-size: ${textSize.m}px;
`;
