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
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

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
          title="Open Modal"
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
  background-color: ${colors.neutral400};
`;

const CenterText = styled.Text`
  font-size: ${textSize.l}px;
`;

const NavigationButton = styled.Button`
  height: 30px;
`;

export default WalletScreen;
