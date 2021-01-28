import { createSendTask } from '@tixl/tixl-sdk-js/redux/tasks/actions';
import { AssetSymbol } from '@tixl/tixl-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Button } from '../../buttons/Button';
import { colors, spacing, textSize } from '../../../constants';
import assets from '../../../helpers/assets';
import { useBalance } from '../../../hooks/useBalance';
import { TextInput } from '../../inputs/TextInput';
import { Text } from '../../text/Text';

import { sendBlockWaitingForNetwork } from '@tixl/tixl-sdk-js/redux/tasks/selectors';

type Props = {
  asset: AssetSymbol;
  receiver?: string;
};

export const ModalContentSend: React.FC<Props> = ({ asset, receiver = '' }) => {
  const dispatch = useDispatch();

  const symbol = assets[asset].symbol;
  const balance = useBalance(asset);
  const [address, setAddress] = useState(receiver);
  const [amount, setAmount] = useState('0.0');
  const [amountValid, setAmountValid] = useState<boolean>(true);
  const [addressValid, setAddressValid] = useState<boolean>(false);
  const [startedTransaction, setStartedTransaction] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const sendTaskWaiting = useSelector(sendBlockWaitingForNetwork);

  const onAddressUpdated = (address: string, asset: AssetSymbol) => {
    validateAddressAutobahn(address);
    setAddress(address);
  };

  const onAmountUpdated = (amount: string, asset: AssetSymbol) => {
    if (false) {
      // showErrorMEssage
    }
    setAmount(amount);
  };

  const handleSend = useCallback(async () => {
    setStartedTransaction(true);
    dispatch(createSendTask(amount, address, asset));
  }, [address, amount, dispatch, asset]);

  useEffect(() => {
    if (sendTaskWaiting) {
      console.log('sendTaskWaiting: ', sendTaskWaiting);
      setTimeout(() => setSuccess(true), 250);
    }
  }, [dispatch, sendTaskWaiting]);

  const validateAddressAutobahn = useCallback(
    (address: string, isSend: boolean = true): boolean => {
      const recipientAddressHasValidLength = address.length > 10;
      const showWalletAddressError =
        address.length > 0 && !recipientAddressHasValidLength;

      if (
        showWalletAddressError ||
        (isSend && !recipientAddressHasValidLength)
      ) {
        setAddressValid(false);
        return false;
      } else {
        setAddressValid(true);
        return true;
      }
    },
    []
  );

  return (
    <Container>
      <Header>
        <DragIcon></DragIcon>
        <Title
          fontColor={colors.WHITE}
          fontSize={textSize.l}
          fontWeight="regular"
          textAlign="left"
        >
          Send {symbol}
        </Title>
        <SubTitle
          fontColor={colors.WHITE}
          fontSize={textSize.xs}
          textAlign="left"
          fontWeight="regular"
        >
          Send your {symbol} tokens to a recipient within or outside of Tixl’s
          Autobahn Network.
        </SubTitle>
      </Header>
      <Content>
        <InputSection>
          {/* <Text textAlign="left" >BTC or Autobahn Network Address</Text> */}
          <InputHeader
            fontWeight="semiBold"
            fontSize={textSize.s}
            fontColor={colors.LIGHT_BLACK}
          >
            {symbol == 'BTC' && symbol + ' or '}Autobahn Network Address{' '}
            {!addressValid && '(Adress not valid)'}
          </InputHeader>
          <TextInput
            value={address}
            onChangeText={(newValue: string) =>
              onAddressUpdated(newValue, asset)
            }
          ></TextInput>
        </InputSection>
        <InputSection>
          {/* <Text textAlign="left" >BTC or Autobahn Network Address</Text> */}
          <InputHeader
            fontWeight="semiBold"
            fontSize={textSize.s}
            fontColor={colors.LIGHT_BLACK}
          >
            Amount
          </InputHeader>
          <InputHeader
            fontColor="grey"
            fontSize={textSize.xs}
            fontWeight="semiBold"
          >
            Balance: {balance.toString()} {symbol}
          </InputHeader>
          <TextInput
            value={amount}
            placeholder="0.00"
            onChangeText={(newValue: string) =>
              onAmountUpdated(newValue, asset)
            }
          ></TextInput>
        </InputSection>
        <Button
          label="Send"
          onPress={handleSend}
          disabled={!amountValid || !addressValid}
        ></Button>
      </Content>
    </Container>
  );
};

const Container = styled.View``;

const Header = styled.View`
  padding: ${spacing.s}px;
  background-color: ${colors.LIGHT_BLUE};
  align-items: center;
`;

const DragIcon = styled.View`
  position: absolute;
  margin-top: ${spacing.xs}px;
  width: 35px;
  height: 5px;
  border-radius: 5px;
  opacity: 0.5;
  background-color: white;
`;

const Title = styled(Text)`
  margin-bottom: ${spacing.xxs}px;
  width: 100%;
`;

const SubTitle = styled(Text)`
  width: 100%;
`;

const Content = styled.View`
  padding: ${spacing.s}px;
  background-color: white;
`;

const InputSection = styled.View`
  margin-bottom: ${spacing.l}px;
`;

const InputHeader = styled(Text)`
  text-align: left;
  margin-bottom: ${spacing.xxs}px;
`;
