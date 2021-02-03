import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Text } from '../text/Text';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Logo } from '../Logo';
import usePortfolioValue from '../../hooks/usePortfolioValue';
import CurrencyValue from '../../smartComponents/CurrencyValue';

type HeaderBarType = 'value' | 'back' | 'close';

export type HeaderBarProps = {
  type: HeaderBarType;
  title?: string;
  portfolioValue?: string;
};

export const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const portfolioValue = usePortfolioValue();

  // Get navigation for back button usage
  const navigation = useNavigation();
  // Get route name (also works for route name of parent element)
  const route = useRoute();

  return (
    <Container>
      <LeftContainer>
        {/* <Logo size={textSize.xxl} name="btc-cash" /> */}
        <Title fontWeight="semiBold" fontSize={textSize.xxl} alignToBottom>
          {props.title ? props.title : route.name}
        </Title>
      </LeftContainer>

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
              fontSize={textSize.m}
              alignToBottom
            >
              $<CurrencyValue amount={portfolioValue} symbol="USD" />
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

const LeftContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const Title = styled(Text)``;

const RightContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

const PortfolioValueContainer = styled.View`
  align-items: flex-end;
`;

const PortfolioValueTitle = styled(Text)``;
const PortfolioValueAmount = styled(Text)``;

const IconContainer = styled.TouchableOpacity``;
