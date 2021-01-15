import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { Button, MnemonicItem, MnemonicWord, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children?: string;
};

const MnemonicConfirmScreen: React.FC<Props> = ({}) => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Confirm your phrase' }}
    >
      <Content></Content>
    </ScreenWrapper>
  );
};

const Content = styled.View`
  flex: 1;
`;

export default MnemonicConfirmScreen;
