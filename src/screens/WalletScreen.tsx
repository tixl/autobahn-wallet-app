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
  const { openSendModal, openReceiveModal } = useBottomModal();

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
      <Container>
        {assets.map((asset, index) => (
          <AssetCard
            key={index}
            asset={asset}
            onPress={() => onButtonPress(asset)}
          />
        ))}
        <Button label="Reload chains" onPress={onReloadPressed}></Button>
      </Container>
    </ScreenWrapper>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  overflow: visible;
  padding-top: ${spacing.viewTopPadding}px;
`;

// const Container = styled.View`
//   /* padding: ${spacing.m}px ${spacing.s}px 0px; */
// `;

export default WalletScreen;
