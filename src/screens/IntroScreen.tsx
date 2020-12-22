import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children?: string;
};

const IntroScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <CenterText>Intro</CenterText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const CenterText = styled.Text`
  color: white;
`;

export default IntroScreen;
