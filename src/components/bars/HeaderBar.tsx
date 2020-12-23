import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Text } from '../text/Text';

type HeaderBarType = 'value' | 'back' | 'close';

type Props = {
  type: HeaderBarType;
  title?: string;
  portfolioValue?: string;
};

export const HeaderBar: React.FC<Props> = (props) => {
  // Use Tixl SDK / Redux store to retrieve portfolio value later on
  const [portfolioValue, setPortfolioValue] = useState<string>('23.30');

  // Get navigation for back button usage
  const navigation = useNavigation();
  // Get route name (also works for route name of parent element)
  const route = useRoute();

  return (
    <Container>
      {/* <Title>{props.title ? props.title : route.name}</Title> */}
      <Text fontWeight="semiBold" fontSize={textSize.xxl}>
        {props.title}
      </Text>
      <RightContainer>
        {props.type == 'value' && (
          <PortfolioValueContainer>
            <PortfolioValueTitle>Portfolio Value</PortfolioValueTitle>
            <PortfolioValueAmount>
              ${props.portfolioValue ? props.portfolioValue : portfolioValue}
            </PortfolioValueAmount>
          </PortfolioValueContainer>
        )}
        {props.type == 'close' && (
          <IconContainer onPress={() => navigation.goBack()}>
            <Icon name={iconName.close} color="black" size={28}></Icon>
          </IconContainer>
        )}
      </RightContainer>
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
  font-family: ${fonts.semiBold};
  font-size: ${textSize.xxl}px;
`;

const RightContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

const PortfolioValueContainer = styled.View`
  align-items: flex-end;
`;

const PortfolioValueTitle = styled.Text`
  font-family: ${fonts.light};
  font-size: ${textSize.s}px;
`;
const PortfolioValueAmount = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: ${textSize.s}px;
`;

const IconContainer = styled.TouchableOpacity``;
