import { useNavigation } from '@react-navigation/native';
import { createAccountChain } from '@tixl/tixl-sdk-js/redux/chains/actions';
import { generateKeys } from '@tixl/tixl-sdk-js/redux/keys/actions';
import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import { AssetSymbol } from '@tixl/tixl-types';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Button, Logo } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';
import { useAccountChain } from '../hooks/useAccountChain';

type Props = {
  children?: string;
};

const StartScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const accountChain = useAccountChain();
  const keySet = useSelector(getKeys);

  const onCreateNewWallet = async () => {
    if (keySet) return;
    // dont call crypto immediately, usually these are user initiated anyways
    await new Promise((resolve) => setTimeout(resolve, 100));
    dispatch(generateKeys());
  };

  React.useEffect(() => {
    if (!keySet) return;
    if (accountChain) return;
    // create account chain
    dispatch(createAccountChain());
  }, [keySet]);

  return (
    <SafeAreaContainer>
      <Container>
        <TopContainer>
          <LogoContainer>
            <Logo name={AssetSymbol.TXL} size={textSize.xxxxl}></Logo>
          </LogoContainer>
          <TitleContainer>
            <TitleText>Tixl's</TitleText>
            <TitleText style={{ color: colors.BLUE }}>
              Autobahn Network Wallet
            </TitleText>
          </TitleContainer>
          <SubTitleText>
            Use Tixl’s Autobahn Network Wallet to send, receive, deposit, or
            withdraw funds. Experience instant and 0 to minimum fee
            transactions!
          </SubTitleText>
        </TopContainer>
        <ButtonContainer>
          <Button
            type="primary"
            label="Create new wallet"
            onPress={onCreateNewWallet}
          />
          <ButtonSpacer />
          <Button
            type="secondary"
            label="Login existing wallet"
            onPress={() => navigation.navigate('Login')}
          />
        </ButtonContainer>
      </Container>
    </SafeAreaContainer>
  );
};

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 0px ${spacing.s}px 0px;
`;

const TopContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.View`
  margin-bottom: ${spacing.m}px;
`;

const TitleContainer = styled.View`
  margin-bottom: ${spacing.s}px;
`;

const TitleText = styled.Text`
  text-align: center;
  font-family: ${fonts.extraBold};
  font-size: ${textSize.xxxl}px;
`;

const SubTitleText = styled.Text`
  font-family: ${fonts.regular};
  font-size: ${textSize.s}px;
  text-align: center;
  color: ${colors.GRAY};
`;

const ButtonContainer = styled.View`
  width: 100%;
  margin-top: ${spacing.l}px;
  margin-bottom: ${spacing.s}px;
`;

const ButtonSpacer = styled.View`
  height: ${spacing.s}px;
`;

export default StartScreen;
