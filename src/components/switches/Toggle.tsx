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
      trackColor={{ false: colors.DARK_GRAY, true: colors.LIGHT_BLUE }}
      thumbColor={props.value ? colors.DARK_BLUE : '#f4f3f4'}
      {...props}
    ></Switch>
  );
};
