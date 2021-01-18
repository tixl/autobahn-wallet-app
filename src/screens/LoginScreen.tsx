import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { BottomBar, Button, MnemonicPhrase, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeScrollEvent } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type Props = {};

const LoginScreen: React.FC<Props> = ({}) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const emptyMnemonic = Array(24).join('.').split('.');
  const [enteredMnemonic, setEnteredMnemonic] = useState<string[]>(
    emptyMnemonic
  );
  const [mnemonicValid, setMnemonicValid] = useState<boolean>(false);

  // Add updated value to array of entered mnemonic phrase
  const updateEnteredMnemomic = (index: number, value: string) => {
    const updatedEnteredMnemonic = [...enteredMnemonic];
    updatedEnteredMnemonic[index] = value;
    setEnteredMnemonic(updatedEnteredMnemonic);
  };

  // Check if menmonic is valid
  const validateMnemonic = (mnemonic: string[]) => {
    // TODO
    // (Check for size)
    // Check for empty strings
    return mnemonic.filter((word) => word == '').length <= 0;
  };

  const onUnlockPressed = async () => {
    if (validateMnemonic(enteredMnemonic)) {
      // const seed = await mnemonicToSeed(words);
      // const bip32 = fromSeed(seed);
      // navigation.navigate('LoginLoadingS', { phrase: bip32 });
      console.log('Unlock button pressed');
    }
  };

  // Validate entered mnemonic every time it was updated
  useEffect(() => {
    const isValid = validateMnemonic(enteredMnemonic);
    setMnemonicValid(isValid);
  }, [enteredMnemonic]);

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Enter Mnemonic Phrase' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <ScrollContainer>
          <MnemonicPhrase
            mnemonic={emptyMnemonic}
            onValueUpdated={(index, value) =>
              updateEnteredMnemomic(index, value)
            }
          ></MnemonicPhrase>
        </ScrollContainer>
        <BottomBar
          onNext={() => onUnlockPressed()}
          nextButtonText="Unlock"
          nextButtonDisabled={!mnemonicValid}
          onPrevious={() => navigation.goBack()}
          previousButtonText="Back"
          text="Type your mnemonic phrase and we will recover your wallet"
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
