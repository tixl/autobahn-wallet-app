import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, shapes, spacing, textSize } from '../../constants';
import { Switch } from 'react-native';
import { MnemonicWord } from './MnemonicWord';

type Props = {
  index: number;
  label: string;
};

export const MnemonicItem: React.FC<Props> = ({ index, label = '' }) => {
  return (
    <Container>
      <CounterText>{index + 1}: </CounterText>
      <MnemonicWord label={label} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${spacing.s}px;
  width: 50%;
`;

const CounterText = styled.Text`
  width: 30px;
  margin-right: ${spacing.xs}px;
  font-family: ${fonts.semiBold};
  color: ${colors.GRAY};
  font-size: ${textSize.m}px;
`;
