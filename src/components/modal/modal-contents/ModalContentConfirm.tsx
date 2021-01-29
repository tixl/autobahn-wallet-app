import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { sendBlockWaitingForNetwork } from '@tixl/tixl-sdk-js/redux/tasks/selectors';
import { SendConfirmModalProps } from '../../../redux/reducer/modal';
import { useBottomModal } from '../../../hooks/useBottomModal';
import assets from '../../../helpers/assets';
import { createSendTask } from '@tixl/tixl-sdk-js/redux/tasks/actions';
import { Button } from '../..';
import { AssetSymbol } from '@tixl/tixl-types';

export const ModalContentConfirm: React.FC<SendConfirmModalProps> = ({
  asset,
  address,
  amount,
  isAutobahn,
  note,
}) => {
  const dispatch = useDispatch();
  const { closeModal } = useBottomModal();

  // Start sending
  //   useEffect(() => {
  //     dispatch(createSendTask(amount, address, asset));
  //   }, [asset, address, amount, isAutobahn, note]);

  useEffect(() => {
    dispatch(
      createSendTask(
        '200',
        'rhJzJW48fnZi2ghZdCDF63MLYP4DsVRWgHPyPcNtNAuH',
        AssetSymbol.TXL
      )
    );
  });

  const sendTaskWaiting = useSelector(sendBlockWaitingForNetwork);

  useEffect(() => {
    if (sendTaskWaiting) {
      console.log('sendTaskWaiting: ', sendTaskWaiting);
      setTimeout(() => closeModal(), 250);
    } else {
      console.log('Task stopped');
    }
  }, [dispatch, sendTaskWaiting]);

  return (
    <Container>
      <Text>
        Sending {amount} {asset} tokens to address: {address}
      </Text>
      <ActivityIndicator size="large" />
    </Container>
  );
};

const Container = styled.View`
  margin: 10px;
  height: 100px;
  align-items: center;
`;

const Text = styled.Text`
  align-items: center;
`;
