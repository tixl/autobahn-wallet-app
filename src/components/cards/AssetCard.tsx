import React, { useRef, useState, useEffect } from 'react';
import { Animated, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Image } from 'react-native-svg';
import {
  animationSelect,
  animationSelectShadow,
  textSize,
  colors,
  spacing,
  shapes,
} from '../../constants';
import fireHapticFeedback from '../../utils/hapticFeedback';
import { Text } from '../text/Text';
import { TouchableWrapper } from '../wrapper/TouchableWrapper';

type Props = {
  name: string;
  logo?: Image;
  amount: string;
  prefix: string;
  amountUsd: string;
  disabled?: boolean;
  onPress?: () => void;
};

export const AssetCard: React.FC<Props> = (props) => {
  const handlePress = () => {
    if (props.onPress && !props.disabled) {
      fireHapticFeedback('selection');
      props.onPress();
    } else {
      fireHapticFeedback('notificationError');
    }
  };

  // Animation
  const [scale] = useState(new Animated.Value(1));
  const [shadowOpacity] = useState(new Animated.Value(0.16));

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
    <TouchableWrapper onPress={props.onPress}>
      <Container>
        <AssetInformationContainer>
          <AssetIconContainer>
            <Icon
              name={iconName.bug}
              size={shapes.iconSize}
              color={colors.DARK_GRAY}
            ></Icon>
          </AssetIconContainer>
          <AssetName fontSize={textSize.m}>{props.name}</AssetName>
        </AssetInformationContainer>
        <AssetAmountContainer>
          <AssetAmountValue fontWeight="semiBold" fontSize={textSize.s}>
            {props.prefix} {props.amount}
          </AssetAmountValue>
          <AssetAmountValueDollar fontWeight="light" fontSize={textSize.xs}>
            USD ${props.amountUsd}
          </AssetAmountValueDollar>
        </AssetAmountContainer>
      </Container>
    </TouchableWrapper>
  );
};

const Container = styled.View`
  height: 112px;
  border-radius: ${shapes.borderRadius}px;
  background-color: white;
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

const AssetIconContainer = styled.View`
  margin-right: 10px;
`;

const AssetName = styled(Text)``;

const AssetAmountContainer = styled.View`
  align-items: flex-end;
`;

const AssetAmountValue = styled(Text)``;

const AssetAmountValueDollar = styled(Text)``;
