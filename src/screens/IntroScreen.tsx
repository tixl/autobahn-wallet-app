import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import styled from 'styled-components/native';
import { Button, Logo } from '../components';
import { colors, fonts, spacing, textSize } from '../constants';

type Props = {
  children?: string;
};

const IntroScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <Container>
        <LogoContainer>
          <Logo name="tixl" size={textSize.xxxxl}></Logo>
        </LogoContainer>
        <TitleContainer>
          <TitleText>Tixl's</TitleText>
          <TitleText style={{ color: colors.BLUE }}>
            Autobahn Network Wallet
          </TitleText>
        </TitleContainer>
        <SubTitleText>
          Use Tixl’s Autobahn Network Wallet to send, receive, deposit, or
          withdraw funds. Experience instant and 0 to minimum fee transactions!
        </SubTitleText>
        <ButtonContainer>
          <Button
            type="primary"
            label="Create new wallet"
            onPress={() => navigation.navigate('Legal')}
          />
          <ButtonSpacer />
          <Button
            type="secondary"
            label="Login existing wallet"
            onPress={() => console.log('Login clicked')}
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
  align-items: center;
  justify-content: center;
  padding: 0px ${spacing.s}px 0px;
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
`;

const ButtonSpacer = styled.View`
  height: ${spacing.s}px;
`;

export default IntroScreen;
