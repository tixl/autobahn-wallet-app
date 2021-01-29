import { AssetSymbol } from '@tixl/tixl-types';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Button } from '../../buttons/Button';
import { colors, spacing, textSize } from '../../../constants';
import assets from '../../../helpers/assets';
import { useBalance } from '../../../hooks/useBalance';
import { TextInput } from '../../inputs/TextInput';
import { Text } from '../../text/Text';
import { Selector } from '../../inputs/Selector';
import JSBI from 'jsbi';
import { parseAssetValue } from '../../../smartComponents/CurrencyValue';
import { useBottomModal } from '../../../hooks/useBottomModal';
import { SendModalProps } from '../../../redux/reducer/modal';

export const ModalContentSend: React.FC<SendModalProps> = ({
  asset,
  isAutobahn = true,
}) => {
  const { openSendConfirmModal } = useBottomModal();

  const symbol = assets[asset].symbol;
  const balance: JSBI = useBalance(asset);
  const [isNetworkAutobahn, setNetworkAutobahn] = useState<boolean>(isAutobahn);
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState<string>('');
  const [addressInvalid, setErrorMessageAdderessInvalid] = useState('');
  const [amountInvalid, setErrorMessageAmountInvalid] = useState('');
  const [noteErrorMsg, setErrorMessageNoteMaximum] = useState('');

  const onAmountUpdated = (amount: string) => {
    setAmount(amount);
  };

  const onAddressUpated = (address: string) => {
    setAddress(address);
  };

  const onSendAsset = () => {
    const sendAmount = parseAssetValue(amount, asset as AssetSymbol);

    if (isNetworkAutobahn) {
      const isAddressPass = validateAddressAutobahn(address);
      const isAmountPass = validateAmount();

      console.log(isAddressPass, isAmountPass);

      if (isAddressPass && isAmountPass) {
        openSendConfirmModal({
          asset: asset,
          address: address,
          amount: sendAmount.toString(),
          isAutobahn: true,
          note: note,
        });
      }
    } else {
      // const isAddressPass = validateAddressBTC(address);
      // const isAmountPass = validateAmount();
      const isAddressPass = true,
        isAmountPass = true;

      if (isAddressPass && isAmountPass) {
        openSendConfirmModal({
          asset: asset,
          address: address,
          amount: sendAmount.toString(),
          isAutobahn: false,
          note: note,
        });
      }
    }
  };

  const validateAddressAutobahn = useCallback(
    (address: string, isSend: boolean = true): boolean => {
      const recipientAddressHasValidLength = address.length > 10;
      const showWalletAddressError =
        address.length > 0 && !recipientAddressHasValidLength;

      if (
        showWalletAddressError ||
        (isSend && !recipientAddressHasValidLength)
      ) {
        setErrorMessageAdderessInvalid('This address seems to be invalid.');
        return false;
      } else {
        setErrorMessageAdderessInvalid('');
        return true;
      }
    },
    []
  );

  const validateAmountAvailable = useCallback(
    (amount: JSBI) => JSBI.LE(amount, balance),
    [balance]
  );
  const validateAmountError = useCallback(
    (amount: JSBI) => JSBI.GT(amount, 0) && !validateAmountAvailable(amount),
    [validateAmountAvailable]
  );

  const validateAmount = useCallback(
    (isSend: boolean = true): boolean => {
      const sendAmount = parseAssetValue(amount, asset as AssetSymbol);
      const showAmountError = validateAmountError(sendAmount);
      if (showAmountError || (isSend && (!amount || Number(amount) <= 0))) {
        setErrorMessageAmountInvalid('This amount is invalid');
        return false;
      } else {
        setErrorMessageAmountInvalid('');
        return true;
      }
    },
    [validateAmountError, amount, asset]
  );

  // Handle network selector change
  const handleSelectorChange = (value: string) => {
    setNetworkAutobahn(value == 'autobahn' ? true : false);
  };

  useEffect(() => {
    // TODO: Validate adress
  }, [address]);

  useEffect(() => {
    // TODO: Validate amount
  }, [amount]);

  return (
    <Container>
      <Header>
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
        <InputHeader
          fontWeight="semiBold"
          fontSize={textSize.s}
          fontColor={colors.LIGHT_BLACK}
        >
          Select network
        </InputHeader>
        <Selector
          options={[
            { label: 'Autobahn', value: 'autobahn' },
            { label: 'BTC', value: 'btc' },
          ]}
          initial={isNetworkAutobahn ? 0 : 1}
          onPress={handleSelectorChange}
          style={{ marginBottom: 20 }}
        />
        <InputSection>
          {/* <Text textAlign="left" >BTC or Autobahn Network Address</Text> */}
          <InputHeader
            fontWeight="semiBold"
            fontSize={textSize.s}
            fontColor={colors.LIGHT_BLACK}
          >
            {isNetworkAutobahn ? 'Autobahn' : 'BTC'} network address
          </InputHeader>
          <TextInput
            value={address}
            onChangeText={(newValue: string) => onAddressUpated(newValue)}
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
          <TextInput
            value={amount}
            placeholder="0.00"
            onChangeText={(newValue: string) => onAmountUpdated(newValue)}
          ></TextInput>
          <InputHeader
            fontColor="grey"
            fontSize={textSize.xs}
            fontWeight="semiBold"
          >
            Balance: {balance.toString()} {symbol}
          </InputHeader>
        </InputSection>
        <Button
          label="Send"
          onPress={onSendAsset}
          disabled={!(amount && address)}
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
