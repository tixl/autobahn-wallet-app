import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssetCard, HeaderBar } from '../components';
import { textSize, colors, spacing } from '../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ExampleAsset, ExampleState } from '../redux/reducer/example';

type Props = {
  children?: string;
};

export const WalletScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  // Get example data from redux store
  const { assets, portfolioValue }: ExampleState = useSelector(
    (state: RootState) => state.example
  );

  const onButtonPress = (asset: ExampleAsset) => {
    navigation.navigate('CurrencyDetail');
  };

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderBar type="value" title="Assets" />
      <ContentContainer>
        {assets.map((asset, index) => (
          <AssetCard
            key={index}
            name={asset.name}
            prefix={asset.prefix}
            onPress={() => onButtonPress(asset)}
            amount={asset.value.toString()}
            amountUsd={asset.valueUsd.toString()}
            disabled={asset.prefix == 'TXL'}
          />
        ))}
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
