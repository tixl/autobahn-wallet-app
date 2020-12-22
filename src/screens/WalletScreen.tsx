import * as React from 'react';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderBar } from '../components';
import { textSize, colors } from '../constants';

type Props = {
  children?: string;
};

export const WalletScreen: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();
  const route = useRoute();

  const onButtonPress = () => {
    console.log('Button pressed');
    navigation.navigate('CurrencyDetail');
  };

  console.log(insets.top);

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderBar type="value" />
      <ContentContainer>
        <CenterText>Wallet</CenterText>
        <NavigationButton
          title="Button"
          onPress={onButtonPress}
        ></NavigationButton>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

const CenterText = styled.Text`
  color: white;
`;

const NavigationButton = styled.Button`
  height: 30px;
`;

export default WalletScreen;
