import { AssetSymbol } from '@tixl/tixl-types';
import React from 'react';
import { ColorValue, Image, ImageSourcePropType } from 'react-native';
import assets from '../helpers/assets';

type Props = {
  name: string;
  size?: number;
  backgroundColor?: ColorValue;
};

export const Logo: React.FC<Props> = ({
  name,
  size = 36,
  backgroundColor = 'transparent',
}) => {
  return (
    <Image
      source={assets[name].icon as ImageSourcePropType}
      style={{ width: size, height: size, backgroundColor: backgroundColor }}
    ></Image>
  );
};
