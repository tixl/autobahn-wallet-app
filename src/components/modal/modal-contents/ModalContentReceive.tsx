import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Text } from '../../text/Text';
import { ReceiveModalProps } from '../../../redux/reducer/modal';
import { Button } from '../../buttons/Button';
import { getAccountChain } from '@tixl/tixl-sdk-js/redux/chains/selectors';
import {
  colors,
  spacing,
  textSize,
  windowHeight,
  windowWidth,
} from '../../../constants';

import QRCode, { QRCodeProps } from 'react-native-qrcode-svg';

export const ModalContentReceive: React.FC<ReceiveModalProps> = ({ asset }) => {
  const accountChain = useSelector(getAccountChain);

  let address = accountChain!.publicSig;

  return (
    <Container>
      <Title fontSize={textSize.l} fontWeight="semiBold">
        Receive {asset}
      </Title>
      <SubTitle fontSize={textSize.m} fontWeight="regular">
        Use the following address to receive {asset}
      </SubTitle>
      <QRContainer>
        <QRCode value={address.toString()} size={windowWidth * 0.5}></QRCode>
      </QRContainer>
      <SubTitle fontSize={textSize.m} fontWeight="semiBold">
        {address}
      </SubTitle>
      <ButtonContainer>
        <Button
          label="Deposit"
          onPress={() => console.log('Deposit button clicked')}
        ></Button>
        <ButtonSpacer />
        <Button
          label="Copy address"
          onPress={() => console.log('Copy address button clicked')}
        ></Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.View`
  padding-right: ${spacing.s}px;
  padding-left: ${spacing.s}px;
  padding-top: ${spacing.s}px;
  align-items: center;
`;

const Title = styled(Text)`
  margin-bottom: ${spacing.xs}px;
  width: 100%;
`;

const SubTitle = styled(Text)`
  margin-bottom: ${spacing.m}px;
  width: 100%;
`;

const QRContainer = styled.View`
  margin-bottom: ${spacing.m}px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
`;
const ButtonSpacer = styled.View`
  width: ${spacing.m}px;
`;
