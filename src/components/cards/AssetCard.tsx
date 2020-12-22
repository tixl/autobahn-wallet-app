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
    <Touch
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
        <AssetAmountContainer></AssetAmountContainer>
      </Container>
    </Touch>
  );
};

const Touch = styled.TouchableWithoutFeedback`
  overflow: visible;
`;

const Container = styled(Animated.View)`
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
