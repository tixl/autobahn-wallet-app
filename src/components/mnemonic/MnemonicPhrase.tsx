import React from 'react';
import styled from 'styled-components/native';
import { colors, fonts, spacing, textSize } from '../../constants';
import { MnemonicWord } from './MnemonicWord';

type Props = {
  mnemonic: string[];
  onValueUpdated?: (index: number, value: string) => any;
};

export const MnemonicPhrase: React.FC<Props> = ({
  mnemonic = [],
  onValueUpdated,
}) => {
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
              onChangeText={(newValue) =>
                onValueUpdated && onValueUpdated(index, newValue)
              }
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
