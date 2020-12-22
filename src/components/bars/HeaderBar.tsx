import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';

type HeaderBarType = 'value' | 'back' | 'close';

type Props = {
  type: HeaderBarType;
  title?: string;
  portfolioValue?: string;
};

export const HeaderBar: React.FC<Props> = (props) => {
  // Use Tixl SDK / Redux store to retrieve portfolio value later on
  const [portfolioValue, setPortfolioValue] = useState<string>('23.30');

  // Get route name (also works for route name of parent element)
  const route = useRoute();

  return (
    <Container>
      <Title>{props.title ? props.title : route.name}</Title>
      <PortfolioValueContainer>
        <PortfolioValueTitle>Portfolio Value</PortfolioValueTitle>
        <PortfolioValueAmount>
          ${props.portfolioValue ? props.portfolioValue : portfolioValue}
        </PortfolioValueAmount>
      </PortfolioValueContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0px ${spacing.s}px ${spacing.xs}px;
  height: 45px;
`;

const Title = styled.Text`
  font-size: ${textSize.xl}px;
  font-weight: bold;
`;

const PortfolioValueContainer = styled.View`
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

const PortfolioValueTitle = styled.Text`
  font-size: ${textSize.s}px;
`;
const PortfolioValueAmount = styled.Text`
  font-size: ${textSize.s}px;
  font-weight: bold;
`;
