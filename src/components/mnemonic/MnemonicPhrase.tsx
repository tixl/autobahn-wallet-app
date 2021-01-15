import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, shapes, spacing, textSize } from '../../constants';
import { Switch } from 'react-native';
import { MnemonicWord } from '..';

type Props = {
  mnemonic: string[];
  onChange?: () => string[];
};

export const MnemonicPhrase: React.FC<Props> = ({ mnemonic = [] }) => {
  const onValueUpdated = (index: number, newValue: string) => {};

  return (
    <Container>
      {mnemonic.map((mnemonicWord, index) => (
        <MnemonicItem key={index}>
          <CounterText>{index + 1}: </CounterText>
          {mnemonicWord.length > 0 ? (
            <MnemonicWord label={mnemonicWord} />
          ) : (
            <MnemonicWord
              input
              onChangeText={(newValue) => onValueUpdated(index, newValue)}
            />
          )}
        </MnemonicItem>
      ))}
    </Container>
  );
};

const Container = styled.View`
  margin-bottom: ${spacing.s}px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MnemonicItem = styled.View`
  min-width: 50%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${spacing.s}px;
`;

const CounterText = styled.Text`
  width: 30px;
  margin-right: ${spacing.xxs}px;
  font-family: ${fonts.semiBold};
  color: ${colors.GRAY};
  font-size: ${textSize.m}px;
`;
