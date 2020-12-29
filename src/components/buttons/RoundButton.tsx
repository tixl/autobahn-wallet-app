import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts } from '../../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon, { iconName } from '../Icon';
import { Text } from '../text/Text';
import { Image } from 'react-native-svg';
import fireHapticFeedback from '../../utils/hapticFeedback';

type Props = {
  title: string;
  color: string;
  icon?: string;
  width?: number;
  onPress?: () => void;
};

export const RoundButton: React.FC<Props> = ({
  color = colors.LIGHT_BLUE,
  width = 80,
  ...props
}) => {
  const handlePress = () => {
    if (props.onPress) {
      fireHapticFeedback('selection');
      props.onPress();
    } else {
      fireHapticFeedback('notificationError');
    }
  };

  return (
    <Container onPress={handlePress} disabled={!props.onPress}>
      <Button
        style={{
          width: width,
          height: width,
          backgroundColor: color,
          borderRadius: width / 2,
        }}
      >
        {props.icon && <Icon name={props.icon} size={width * 0.5} />}
      </Button>

      <TextContainer>
        <Text maxWidth={width * 1.5} fontSize={textSize.s}>
          {props.title ? props.title : 'Placeholder'}
        </Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

const Button = styled.View`
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.View`
  margin-top: ${spacing.xs}px;
`;
