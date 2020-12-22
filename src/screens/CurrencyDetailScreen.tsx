import * as React from 'react';
import styled from 'styled-components/native';

type Props = {
  children?: string;
};

const CurrencyDetailScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <CenterText>Currency Detail </CenterText>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: blue;
`;

const CenterText = styled.Text`
  color: white;
`;

export default CurrencyDetailScreen;
