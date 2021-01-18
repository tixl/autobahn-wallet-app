import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { BottomBar, Button, MnemonicPhrase, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeScrollEvent } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const LoginScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // TODO: Create empty mnemonic phrase

  const mnemonic: string[] = [];

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Enter Mnemonic Phrase' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <ScrollContainer>
          <MnemonicPhrase mnemonic={mnemonic}></MnemonicPhrase>
        </ScrollContainer>
        <BottomBar
          onNext={() =>
            navigation.navigate('MnemonicConfirm', { mnemonic: mnemonic })
          }
          nextButtonText="Next"
          onPrevious={() => navigation.goBack()}
          previousButtonText="Back"
          text="Type your mnemonic phrase and we will recover your wallet

          "
        />
      </Content>
    </ScreenWrapper>
  );
};

const Content = styled.View`
  flex: 1;
`;

const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding-top: ${spacing.viewTopPadding}px;
`;

export default LoginScreen;
