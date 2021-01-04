import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssetCard, HeaderBar, iconName, RoundButton } from '../components';
import { textSize, colors, spacing } from '../constants';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ExampleAsset, ExampleState } from '../redux/reducer/example';
import { RootStackParamList } from '../navigation/stacks/RootStack';

import { SwipeListView } from 'react-native-swipe-list-view';

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
    navigation.navigate('AssetDetail', { asset: asset });
  };

  const handleButton = (type: string) => {
    console.log('Button action ' + type + ' activated');
  };

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderBar type="value" title="Assets" />
      <ContentContainer>
        {/* {assets.map((asset, index) => (
          <AssetCard
            key={index}
            name={asset.name}
            prefix={asset.prefix}
            onPress={() => onButtonPress(asset)}
            amount={asset.value.toString()}
            amountUsd={asset.valueUsd.toString()}
            // disabled={asset.prefix == 'TXL'}
          />
        ))} */}
        <SwipeListView
          style={{
            paddingLeft: spacing.s,
            paddingRight: spacing.s,
            paddingTop: spacing.m,
          }}
          data={assets}
          renderItem={(data, rowMap) => (
            <AssetCard
              key={data.index}
              name={data.item.name}
              prefix={data.item.prefix}
              onPress={() => onButtonPress(data.item)}
              amount={data.item.value.toString()}
              amountUsd={data.item.valueUsd.toString()}
              // disabled={asset.prefix == 'TXL'}
            />
          )}
          renderHiddenItem={(data, rowMap) => (
            <ButtonContainer key={data.index}>
              <RoundButton
                width={50}
                title="Send"
                icon={iconName.arrowLeft}
                color={colors.LIGHT_BLUE}
                onPress={() => handleButton('send')}
              />
              <RoundButton
                width={50}
                title="Receive"
                icon={iconName.arrowRight}
                color={colors.LIGHT_BLUE}
                onPress={() => handleButton('receive')}
              />
            </ButtonContainer>
          )}
          closeOnRowOpen
          closeOnRowBeginSwipe
          leftOpenValue={50 + 2 * spacing.s}
          rightOpenValue={-(50 + 2 * spacing.s)}
          // leftActivationValue={20}
          // onLeftAction={() => handleButton('send')}
          // onRightAction={() => handleButton('receive')}
        />
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  /* padding: ${spacing.m}px ${spacing.s}px 0px; */
`;

const ButtonContainer = styled.View`
  padding: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
