import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../constants';
import { Switch } from 'react-native';

type Props = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
};

export const Toggle: React.FC<Props> = (props) => {
  return (
    <Switch
      trackColor={{ false: 'grey', true: colors.BLUE_TOGGLE }}
      ios_backgroundColor="grey"
      thumbColor={props.value ? colors.BLUE_TOGGLE_LIGHT : 'white'}
      {...props}
    ></Switch>
  );
};
