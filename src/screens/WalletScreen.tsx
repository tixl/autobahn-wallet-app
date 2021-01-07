import React from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AssetCard, iconName, RoundButton } from '../components';
import { colors, spacing } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ExampleAsset, ExampleState } from '../redux/reducer/example';
import { uiActions } from '../redux/reducer/ui';

import { SwipeListView } from 'react-native-swipe-list-view';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { useBottomModal } from '../hooks/useBottomModal';

type Props = {
  children?: string;
};

export const WalletScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const { showModal } = useBottomModal();

  // Get example data from redux store
  const { assets }: ExampleState = useSelector(
    (state: RootState) => state.example
  );

  const onButtonPress = (asset: ExampleAsset) => {
    navigation.navigate('AssetDetail', { asset: asset });
  };

  return (
    <ScreenWrapper headerBarConfig={{ type: 'value' }}>
      <SwipeListView
        style={{
          overflow: 'visible',
          paddingTop: spacing.viewTopPadding,
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
              onPress={() => showModal('send')}
            />
            <RoundButton
              width={50}
              title="Receive"
              icon={iconName.arrowRight}
              color={colors.LIGHT_BLUE}
              onPress={() => showModal('receive')}
            />
          </ButtonContainer>
        )}
        closeOnRowOpen
        closeOnRowBeginSwipe
        leftOpenValue={50 + 2 * spacing.s}
        rightOpenValue={-(50 + 2 * spacing.s)}
      />

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
    </ScreenWrapper>
  );
};

const ButtonContainer = styled.View`
  padding: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.View`
  /* padding: ${spacing.m}px ${spacing.s}px 0px; */
`;

export default WalletScreen;
