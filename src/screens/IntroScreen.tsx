import * as React from 'react';
import styled from 'styled-components/native';
import { ScreenWrapper } from './wrapper/ScreenWrapper';

type Props = {
  children?: string;
};

const IntroScreen: React.FC<Props> = (props) => {
  return (
    <ScreenWrapper>
      <Container>
        <CenterText>Intro Screen</CenterText>
      </Container>
    </ScreenWrapper>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

const CenterText = styled.Text`
  color: black;
`;

export default IntroScreen;
