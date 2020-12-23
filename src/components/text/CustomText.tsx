import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing } from '../../constants';

type Props = {
  children: string,
};

export const CustomText: React.FC<Props> = (props) => {
  return <CustomText>{props.children}</CustomText>;
};

const CustomText = styled.Text``;
