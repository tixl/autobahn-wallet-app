import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, shapes, spacing, textSize } from '../../constants';
import { Switch } from 'react-native';

type Props = {
  label: string;
};

export const MnemonicWord: React.FC<Props> = ({ label = '' }) => {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  );
};

const Container = styled.View`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xs}px ${spacing.s}px;
  background-color: ${colors.BLUE};
  border-radius: ${shapes.borderRadiusBig}px;
`;

const Text = styled.Text`
  color: ${colors.WHITE};
  font-family: ${fonts.regular};
  text-align: center;
  font-size: ${textSize.m}px;
`;
