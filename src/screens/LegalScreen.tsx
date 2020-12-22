import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children?: string;
};

const LegalScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <CenterText>Legal</CenterText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: orange;
`;

const CenterText = styled.Text`
  color: white;
`;

export default LegalScreen;
