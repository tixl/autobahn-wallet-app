import React, { useRef, useState, useEffect } from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Image } from 'react-native-svg';
import {
  animationSelect,
  animationSelectShadow,
  isSmallDevice,
  textSize,
  colors,
  spacing,
} from '../../constants';
import fireHapticFeedback from '../../utils/hapticFeedback';

type Props = {
  name: string;
  logo?: Image;
  amount: string;
  amountUsd: string;
  onPress?(): void;
};

export const AssetCard: React.FC<Props> = (props) => {
  const handlePress = () => {
    if (props.onPress) {
      fireHapticFeedback('selection');
      props.onPress();
    }
  };

  // Animation
  const scale = new Animated.Value(1);
  const shadowOpacity = new Animated.Value(0.16);

  const handleOnPressIn = () => {
    const configScale = animationSelect(0.98);
    const configShadow = animationSelectShadow(0);
    Animated.timing(scale, configScale).start();
    Animated.timing(shadowOpacity, configShadow).start();
  };

  const handleOnPressOut = () => {
    const configScale = animationSelect(1);
    const configShadow = animationSelectShadow(0.16);
    Animated.timing(scale, configScale).start();
    Animated.timing(shadowOpacity, configShadow).start();
  };

  return (
    <TouchContainer
      onPress={handlePress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <Container
        style={{
          shadowOpacity,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          shadowColor: colors.neutral900,
          transform: [{ scale }],
        }}
      >
        <AssetInformationContainer>
          <AssetLogo></AssetLogo>
          <AssetName>Name</AssetName>
        </AssetInformationContainer>
        <AssetAmountContainer>
          <AssetAmountValue>TXL 0.00</AssetAmountValue>
          <AssetAmountValueDollar>USD $0.00</AssetAmountValueDollar>
        </AssetAmountContainer>
      </Container>
    </TouchContainer>
  );
};

const TouchContainer = styled.TouchableWithoutFeedback`
  overflow: visible;
`;

const Container = styled(Animated.View)`
  height: 112px;
  background-color: white;
  border-radius: 10px;
  padding: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AssetInformationContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

const AssetLogo = styled.View`
  width: 40px;
  height: 40px;
  background-color: blue;
  margin-right: 10px;
`;

const AssetName = styled.Text``;

const AssetAmountContainer = styled.View`
  align-items: flex-end;
`;

const AssetAmountValue = styled.Text``;

const AssetAmountValueDollar = styled.Text`
  color: grey;
`;
