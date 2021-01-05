import React, { useState } from 'react';
import styled from 'styled-components/native';
import { colors, spacing, textSize } from '../../../constants';
import { TextInput } from '../../inputs/TextInput';
import { Text } from '../../text/Text';

type Props = {};

export const ModalContentSend: React.FC<Props> = (props) => {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('0.0');

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
          Send BTC
        </Title>
        <SubTitle
          fontColor={colors.WHITE}
          fontSize={textSize.xs}
          textAlign="left"
          fontWeight="regular"
        >
          Send your BTC tokens to a recipient within or outside of Tixl’s
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
            BTC or Autobahn Network Address
          </InputHeader>
          <TextInput
            type="mail"
            value={address}
            onChangeText={(newValue: string) => setAddress(newValue)}
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
            Balance: 0.00 BTC
          </InputHeader>
          <TextInput
            type="mail"
            value={amount}
            placeholder="0.00"
            onChangeText={(newValue: string) => setAmount(newValue)}
          ></TextInput>
        </InputSection>
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
