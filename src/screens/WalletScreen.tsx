import * as React from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssetCard, Button, HeaderBar } from '../components';
import { textSize, colors, spacing } from '../constants';
import { Image } from 'react-native-svg';

// type Asset = {
//   name: string;
//   amount: string;
//   amountUsd: string;
//   logo?: Image;
// };

// const testAssets: Asset[] = [];

type Props = {
  children?: string;
};

export const WalletScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const onButtonPress = () => {
    navigation.navigate('CurrencyDetail');
  };

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderBar type="value" title="Assets" />
      <ContentContainer>
        <AssetCard
          name="TXL (coming soon)"
          amount="100.00"
          amountUsd="100.00"
        />
        <AssetCard
          name="BTC"
          onPress={() => navigation.navigate('CurrencyDetail')}
          amount="100.00"
          amountUsd="100.00"
        />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: ${spacing.m}px ${spacing.s}px 0px;
`;

const CenterText = styled.Text`
  margin-top: 30px;
  font-size: ${textSize.l}px;
  text-align: center;
`;

const NavigationButton = styled.Button`
  height: 30px;
`;

export default WalletScreen;
