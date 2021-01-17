import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { BottomBar, Button, Toggle } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeScrollEvent } from 'react-native';

type Props = {
  children?: string;
};

const LegalScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

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
      headerBarConfig={{ type: 'back', title: 'Security & Terms' }}
    >
      <Content style={{ paddingBottom: insets.bottom }}>
        <TextContainer
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              setScrolledToBottom(true);
            }
          }}
          scrollEventThrottle={400}
        >
          <CustomText>
            Mnemonic phrases offer permanent and direct access to one’s wallet,
            so they should be treated carefully. These phrases cannot be
            changed, so keeping them safe is crucial.{'\n\n'}
            More tips for using mnemonic phrases: {'\n'}
            {'\n\u2022'} Don’t keep the words on a computer, write them down on
            physical paper.
            {'\n\u2022'} Write them down again. And one more time. Keep these
            lists in easy-to-remember, separate locations.
            {'\n\u2022'} Order is important – the phrase will not work in the
            wrong sequence. {'\n\n'}
            Please be aware of the fact that this Wallet uses Tixl’s Autobahn
            Network v0.1. The use it at your own risk. Coins will not be
            compensated.
          </CustomText>
        </TextContainer>
        <BottomBar
          onNext={() => navigation.navigate('Mnemonic')}
          nextButtonText="Next"
          onPrevious={() => navigation.goBack()}
          previousButtonText="Back"
          showToggle
          toggleDisabled={!scrolledToBottom}
          toggleText="I have read Tixl Wallet‘s Terms of Use and Privacy Policy and
          accept both."
        />
      </Content>
    </ScreenWrapper>
  );
};

const Content = styled.View`
  flex: 1;
`;

const TextContainer = styled.ScrollView`
  flex: 1;

  padding-top: ${spacing.viewTopPadding}px;
`;

const CustomText = styled.Text`
  font-family: ${fonts.light};
  color: ${colors.GRAY};
  font-size: ${textSize.m}px;
`;

export default LegalScreen;
