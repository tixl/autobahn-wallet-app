import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts, shapes } from '../../constants';
import { Text } from '../text/Text';
import { Logo } from '../Logo';
import { AssetSymbol } from '@tixl/tixl-types';

type Props = {
  name: AssetSymbol;
  value: string;
  isDollar?: boolean;
};

export const AssetValueCard: React.FC<Props> = ({ name, value, isDollar }) => {
  return (
    <Container>
      <TextContainer>
        <Text
          fontWeight="light"
          fontSize={textSize.xs}
          fontColor={colors.LIGHT_BLACK}
        >
          Amount in {isDollar ? 'USD' : name.toString()}
        </Text>
        <Text fontSize={textSize.l}>{value}</Text>
      </TextContainer>
      <LogoContainer>
        {/* <Icon name={iconName.bug} color={colors.DARK_GRAY}></Icon> */}
        <Logo name={isDollar ? 'USD' : name} size={textSize.xl} />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  height: 100px;
  flex-direction: row;
  background-color: white;
  border-radius: ${shapes.borderRadius}px;
  overflow: hidden;
  padding: ${spacing.xs}px;
`;

const TextContainer = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const LogoContainer = styled.View`
  justify-content: flex-end;
`;

const AssetLogo = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: lightgray;
`;
