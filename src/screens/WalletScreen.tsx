import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { generateKeys } from '@tixl/tixl-sdk-js/redux/keys/actions';
import { createAccountChain } from '@tixl/tixl-sdk-js/redux/chains/actions';
import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import { setEnvironment } from '@tixl/tixl-sdk-js/helpers/env';
import { getUnspent } from '@tixl/tixl-sdk-js/requests/getUnspent';
import { createReceiveTask } from '@tixl/tixl-sdk-js/redux/tasks/actions';
import { updateBlockStatesNetwork } from '@tixl/tixl-sdk-js/redux/chains/actions';
import { ReceiveTaskData } from '@tixl/tixl-sdk-js/redux/tasks/actionTypes';
import { handleReceiveTask } from '@tixl/tixl-sdk-js/redux/tasks/transactions/receive';

import { AssetCard, iconName, RoundButton } from '../components';
import { colors, spacing } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ExampleAsset, ExampleState } from '../redux/reducer/example';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { useBottomModal } from '../hooks/useBottomModal';
import { TestShowKeys } from '../components/TestShowKeys';
import { useAccountChain } from '../hooks/useAccountChain';

type Props = {
  children?: string;
};

setEnvironment({
  appGateway: 'https://gateway.int.tixl.dev',
});

export const WalletScreen: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const keySet = useSelector(getKeys);
  const accountChain = useAccountChain();
  const state = useSelector((state: RootState) => state);
  const receiveTasks = useSelector((state: RootState) => state.tasks.receive);

  // create the wallet keyset
  React.useEffect(() => {
    (async () => {
      if (keySet) return;

      // dont call crypto immediately, usually these are user initiated anyways
      await new Promise((resolve) => setTimeout(resolve, 100));

      dispatch(generateKeys());
    })();
  }, []);

  // create wallet
  React.useEffect(() => {
    if (!keySet) return;
    if (accountChain) return;

    // create account chain
    dispatch(createAccountChain());
  }, [keySet]);

  // handle incoming send blocks
  React.useEffect(() => {
    if (!keySet) return;

    (async () => {
      console.log('your AN address', keySet.sig.publicKey);

      // find new blocks to receive
      const res = await getUnspent(keySet.sig.publicKey);

      // create receive tasks
      res.blocks.forEach((send) => {
        //dispatch(createReceiveTask(send.signature, undefined, send.symbol));
      });
    })();
  }, [keySet]);

  // update state for blocks
  React.useEffect(() => {
    if (!accountChain) return;

    // lookup new block states
    dispatch(updateBlockStatesNetwork());
  }, [accountChain]);

  // manually handle a receive task
  React.useEffect(() => {
    (async () => {
      receiveTasks.forEach((receiveTask) => {
        // handleReceiveTask(
        //   dispatch,
        //   state as any,
        //   receiveTask as ReceiveTaskData
        // );
      });
    })();
  }, [receiveTasks]);

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
      <TestShowKeys />
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
            logoName={data.item.logo}
            // disabled={asset.prefix == 'TXL'}
          />
        )}
        renderHiddenItem={(data, rowMap) => (
          <ButtonContainer key={data.index}>
            <RoundButton
              width={50}
              title="Send"
              icon={iconName.arrowUp}
              color={colors.LIGHT_BLUE}
              onPress={() => showModal('send')}
            />
            <RoundButton
              width={50}
              title="Receive"
              icon={iconName.arrowDown}
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
