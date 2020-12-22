import * as React from 'react';
import styled from 'styled-components/native';
import { HeaderBar } from '../components';
import { colors, textSize } from '../constants';

type Props = {
  children?: string;
};

const CurrencyDetailScreen: React.FC<Props> = (props) => {
  return (
    <Container>
      <HeaderBar title="Detail" type="close" />
      <ContentContainer>
        <CenterText>Currency Detail </CenterText>
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

export default CurrencyDetailScreen;
