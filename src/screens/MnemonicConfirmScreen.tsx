import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { Button, MnemonicPhrase, MnemonicWord, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StackScreenProps } from '@react-navigation/stack';
import { IntroStackParamList } from '../navigation/stacks/IntroStack';
import _ from 'lodash';

type Props = StackScreenProps<IntroStackParamList, 'MnemonicConfirm'>;

let firstIndex: number;

// Hide 4 elements from mnemonic phrase array by creating 4 random indices and replacing them with an empty string
const generateHiddenMnemonic = async (mnemonic: string[]) => {
  let hiddenMnemonic = [...mnemonic];
  let hiddenIndices: number[] = _.sampleSize(_.range(0, 23), 4);
  if (mnemonic.length <= 0) return [];
  hiddenIndices.forEach((index) => (hiddenMnemonic[index] = ''));
  firstIndex = hiddenIndices.sort((a, b) => a - b)[0];
  return hiddenMnemonic;
};

const MnemonicConfirmScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { mnemonic } = route.params;
  const [hiddenMmemonic, sethiddenMnemonic] = useState<string[]>([]);
  const [tempValidMnemonic, setTempValidMnemonic] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [nextButtonLoading, setNextButtonLoading] = useState<boolean>(false);

  const onNextButtonPressed = async () => {
    if (isValid) {
      console.log('Next button clicked');
      // const seed = await mnemonicToSeed(mnemonic.join(' '));
      // const bip32 = fromSeed(seed);
      // onNext(bip32.privateKey!);
    }
  };

  // Check if temporal mnemonic phrase is same as original mnemonic phrase
  const validateMnemonic = (tempMnemonic: string[]) => {
    setIsValid(tempMnemonic.join(' ') === mnemonic.join(' '));
  };

  // Add updated value to array of valid mnemonic phrase
  const updateValidMnemonic = (index: number, value: string) => {
    const updatedTempValidMnemonic = [...tempValidMnemonic];
    updatedTempValidMnemonic[index] = value;
    setTempValidMnemonic(updatedTempValidMnemonic);
  };

  // Generate mnemonic phrase with hidden words
  useEffect(() => {
    const generatedHiddenMnemonic = generateHiddenMnemonic(mnemonic);
    generatedHiddenMnemonic.then((results) => {
      sethiddenMnemonic([...results]);
      setTempValidMnemonic([...results]);
    });
  }, [mnemonic]);

  // Run validation every time temporal valid mnemonic phrase was updated
  useEffect(() => {
    validateMnemonic(tempValidMnemonic);
  }, [tempValidMnemonic]);

  // Run validation every time temporal valid mnemonic phrase was updated
  useEffect(() => {
    validateMnemonic(tempValidMnemonic);
  }, [tempValidMnemonic]);

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Confirm your phrase' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <ScrollContainer>
          <MnemonicPhrase
            mnemonic={hiddenMmemonic}
            onValueUpdated={(index, value) => updateValidMnemonic(index, value)}
          ></MnemonicPhrase>
        </ScrollContainer>
        <BottomContainer>
          <ButtonContainer>
            <Button
              type="primary"
              label="Back"
              onPress={() => navigation.goBack()}
            />
            <ButtonSpacer />
            <Button
              type="primary"
              disabled={!isValid}
              label="Next"
              loading={nextButtonLoading}
              onPress={() => onNextButtonPressed()}
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

const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding-top: ${spacing.viewTopPadding}px;
`;

const BottomContainer = styled.View``;

const ButtonContainer = styled.View`
  margin-top: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonSpacer = styled.View`
  width: ${spacing.xxl}px;
`;

export default MnemonicConfirmScreen;
