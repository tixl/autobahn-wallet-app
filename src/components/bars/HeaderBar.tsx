import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Text } from '../text/Text';
import { ExampleState } from '../../redux/reducer/example';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type HeaderBarType = 'value' | 'back' | 'close';

type Props = {
  type: HeaderBarType;
  title?: string;
  portfolioValue?: string;
};

export const HeaderBar: React.FC<Props> = (props) => {
  const portfolioValue = useSelector(
    (state: RootState) => state.example.portfolioValue
  );

  // Get navigation for back button usage
  const navigation = useNavigation();
  // Get route name (also works for route name of parent element)
  const route = useRoute();

  return (
    <Container>
      <Title fontWeight="semiBold" fontSize={textSize.xxl} alignToBottom>
        {props.title ? props.title : route.name}
      </Title>
      <RightContainer>
        {props.type == 'value' && (
          <PortfolioValueContainer>
            <PortfolioValueTitle
              fontWeight="light"
              fontSize={textSize.s}
              alignToBottom
            >
              Portfolio Value
            </PortfolioValueTitle>
            <PortfolioValueAmount
              fontWeight="semiBold"
              fontSize={textSize.s}
              alignToBottom
            >
              ${portfolioValue}
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

const Title = styled(Text)`
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

const PortfolioValueTitle = styled(Text)`
  font-family: ${fonts.light};
  font-size: ${textSize.s}px;
`;
const PortfolioValueAmount = styled(Text)`
  font-family: ${fonts.semiBold};
  font-size: ${textSize.s}px;
`;

const IconContainer = styled.TouchableOpacity``;
