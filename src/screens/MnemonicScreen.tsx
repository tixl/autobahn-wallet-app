import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { Button, MnemonicWord, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeScrollEvent } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

type Props = {
  children?: string;
};

const MnemonicScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const mnemonicPhrase = useSelector(
    (state: RootState) => state.example.mnemonicPhrase
  );

  const [accepted, setAccepted] = useState<boolean>(false);

  // Detect if text was scrolled to bottom
  const [scrolledToBottom, setScrolledToBottom] = useState<boolean>(false);
  // const isCloseToBottom = ({
  //   layoutMeasurement,
  //   contentOffset,
  //   contentSize,
  // }: NativeScrollEvent) => {
  //   const paddingToBottom = 20;
  //   return (
  //     layoutMeasurement.height + contentOffset.y >=
  //     contentSize.height - paddingToBottom
  //   );
  // };

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Your Mnemonic Phrase' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <MnemonicPhraseContainer>
          {mnemonicPhrase.map((mnemonicWord, index) => (
            <MnemonicItem key={index}>
              <CounterText>{index + 1}:</CounterText>
              <MnemonicWord label={mnemonicWord}></MnemonicWord>
            </MnemonicItem>
          ))}
        </MnemonicPhraseContainer>
        <BottomContainer>
          <AcceptContainer style={{ opacity: scrolledToBottom ? 1 : 0.4 }}>
            <AcceptText>I wrote down my mnemonic phrase</AcceptText>
            <Toggle
              value={accepted}
              onValueChange={(newValue) => setAccepted(newValue)}
              disabled={!scrolledToBottom}
            />
          </AcceptContainer>
          <ButtonContainer>
            <Button
              type="primary"
              label="Back"
              onPress={() => navigation.goBack()}
            />
            <ButtonSpacer />
            <Button
              type="primary"
              disabled={!accepted}
              label="Next"
              onPress={() => console.log('Login clicked')}
            />
          </ButtonContainer>
        </BottomContainer>
      </Content>
    </ScreenWrapper>
  );
};

const Content = styled.View`
  flex: 1;
`;

const MnemonicPhraseContainer = styled.ScrollView`
  margin-bottom: ${spacing.s}px;
  flex-direction: row;
  /* flex-wrap: wrap; */
  /* overflow: visible; */
`;

const MnemonicItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CounterText = styled.Text`
  margin-right: ${spacing.xs}px;
  font-family: ${fonts.semiBold};
  color: ${colors.GRAY};
  font-size: ${textSize.m}px;
`;

const BottomContainer = styled.View``;

const AcceptContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.m}px;
  /* padding: 0px ${spacing.xs}px; */
`;

const AcceptText = styled.Text`
  flex: 1;
  margin-right: ${spacing.xs}px;
  font-family: ${fonts.regular};
  color: ${colors.BLACK};
  font-size: ${textSize.m}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSpacer = styled.View`
  width: ${spacing.xxl}px;
`;

export default MnemonicScreen;
