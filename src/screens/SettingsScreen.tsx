import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children?: string;
};

const SettingsScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <CenterText>Settings</CenterText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const CenterText = styled.Text`
  color: white;
`;

export default SettingsScreen;
