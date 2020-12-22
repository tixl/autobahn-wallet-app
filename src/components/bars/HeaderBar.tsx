import * as React from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing } from '../../constants';

type Props = {
  title: string;
  portfolioValue: number;
};

export const HeaderBar: React.FC<Props> = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <PortfolioValueContainer>
        <PortfolioValueTitle>Portfolio Value</PortfolioValueTitle>
        <PortfolioValueAmount>${props.portfolioValue}</PortfolioValueAmount>
      </PortfolioValueContainer>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${colors.neutral300};
  margin: 0px ${spacing.s}px ${spacing.xs}px;
  height: 50px;
`;

const Title = styled.Text`
  font-size: ${textSize.m}px;
  font-weight: bold;
`;

const PortfolioValueContainer = styled.View`
  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

const PortfolioValueTitle = styled.Text``;
const PortfolioValueAmount = styled.Text``;
