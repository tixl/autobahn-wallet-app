import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { BottomBar, Button, MnemonicPhrase, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeScrollEvent } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
  children?: string;
};

const MnemonicScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [mnemonic] = useState<string[]>([
    'test',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
  ]);

  const [accepted, setAccepted] = useState<boolean>(false);

  // Detect if text was scrolled to bottom
  const [scrolledToBottom, setScrolledToBottom] = useState<boolean>(false);
  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <ScreenWrapper
      headerBarConfig={{ type: 'back', title: 'Your Mnemonic Phrase' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <ScrollContainer
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              setScrolledToBottom(true);
            }
          }}
          scrollEventThrottle={400}
        >
          <MnemonicPhrase mnemonic={mnemonic}></MnemonicPhrase>
        </ScrollContainer>
        <BottomBar
          onNext={() =>
            navigation.navigate('MnemonicConfirm', { mnemonic: mnemonic })
          }
          nextButtonText="Next"
          onPrevious={() => navigation.goBack()}
          previousButtonText="Back"
          showToggle
          toggleDisabled={!scrolledToBottom}
          toggleText="I wrote down my mnemonic phrase"
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

const BottomContainer = styled.View``;

const AcceptContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${spacing.m}px;
  margin-top: ${spacing.s}px;
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
