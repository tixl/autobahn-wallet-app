import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../constants';
import { StyleProp, Switch, ViewStyle } from 'react-native';
import { CSSProperties } from 'styled-components';

type Props = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Toggle: React.FC<Props> = (props) => {
  return (
    <Switch
      trackColor={{ false: 'grey', true: colors.BLUE }}
      ios_backgroundColor="grey"
      thumbColor={props.value ? colors.BLUE_TOGGLE_LIGHT : 'white'}
      style={props.style}
      {...props}
    ></Switch>
  );
};
