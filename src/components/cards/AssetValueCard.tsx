import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts, shapes } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Text } from '../text/Text';
import { Image } from 'react-native-svg';

type Props = {
  name: string;
  value: string;
  logo?: Image;
};

export const AssetValueCard: React.FC<Props> = (props) => {
  return (
    <Container>
      <TextContainer>
        <Text fontWeight="light" fontSize={textSize.s}>
          Amount in {props.name}
        </Text>
        <Text fontSize={textSize.l}>{props.value}</Text>
      </TextContainer>
      <LogoContainer>
        <AssetLogo></AssetLogo>
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
