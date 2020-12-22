import * as React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children?: string;
};

const SettingsScreen: React.FC<Props> = (props) => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{ paddingTop: insets.top }}>
      <HeaderBar type="value" />
      <ContentContainer>
        <CenterText>Settings</CenterText>
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

export default SettingsScreen;
