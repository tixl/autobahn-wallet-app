import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { AssetCard, Button, iconName, RoundButton } from '../components';
import { colors, spacing } from '../constants';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { useBottomModal } from '../hooks/useBottomModal';
import { AssetSymbol } from '@tixl/tixl-types';
import { useAccountChain } from '../hooks/useAccountChain';
import { useDispatch } from 'react-redux';
import { useScanHistory } from '../hooks/useScanHistory';
import {
  reloadIndexedChains,
  updateBlockStatesNetwork,
} from '@tixl/tixl-sdk-js/redux/chains/actions';

type Props = {
  children?: string;
};

export const WalletScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const { openModal } = useBottomModal();

  const dispatch = useDispatch();
  const scanHistory = useScanHistory();
  const accountChain = useAccountChain();

  const assets: AssetSymbol[] = [AssetSymbol.TXL, AssetSymbol.BTC];

  const onButtonPress = (asset: AssetSymbol) => {
    navigation.navigate('AssetDetail', { asset: asset });
  };

  const onReloadPressed = async () => {
    if (accountChain) {
      console.log('Reloading chains');
      dispatch(reloadIndexedChains());
      dispatch(updateBlockStatesNetwork());
    }
    scanHistory();
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
            asset={data.item}
            onPress={() => onButtonPress(data.item)}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <ButtonContainer key={data.index}>
            <RoundButton
              width={50}
              title="Send"
              icon={iconName.arrowUp}
              color={colors.LIGHT_BLUE}
              onPress={() => openModal({ modalType: 'send', asset: data.item })}
            />
            <RoundButton
              width={50}
              title="Receive"
              icon={iconName.arrowDown}
              color={colors.LIGHT_BLUE}
              onPress={() =>
                openModal({ modalType: 'receive', asset: data.item })
              }
            />
          </ButtonContainer>
        )}
        closeOnRowOpen
        closeOnRowBeginSwipe
        leftOpenValue={50 + 2 * spacing.s}
        rightOpenValue={-(50 + 2 * spacing.s)}
      />
      <Button label="Reload chains" onPress={onReloadPressed}></Button>
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
