import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Image } from 'react-native-svg';

type Props = {
  name: string;
  logo?: Image;
  amount: string;
  amountUsd: string;
  onPress?(): void;
};

export const AssetCard: React.FC<Props> = (props) => {
  return (
    <Container
      {...props}
      disabled={!props.onPress}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      <AssetInformationContainer>
        <AssetLogo></AssetLogo>
        <AssetName>Name</AssetName>
      </AssetInformationContainer>
      <AssetAmountContainer></AssetAmountContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  height: 100px;
  background-color: lightgray;
  border-radius: 10px;
  padding: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AssetInformationContainer = styled.View``;

const AssetLogo = styled.View``;

const AssetName = styled.Text``;

const AssetAmountContainer = styled.View``;
