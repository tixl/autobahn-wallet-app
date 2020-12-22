import * as React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  children?: string;
};

const WalletScreen: React.FC<Props> = (props) => {
  const navigation = useNavigation();

  const onButtonPress = () => {
    console.log('Button pressed');
    navigation.navigate('CurrencyDetail');
  };

  return (
    <Container>
      <CenterText>Wallet</CenterText>
      <NavigationButton
        title="Button"
        onPress={onButtonPress}
      ></NavigationButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const CenterText = styled.Text`
  color: white;
`;

const NavigationButton = styled.Button`
  height: 30px;
`;

export default WalletScreen;
