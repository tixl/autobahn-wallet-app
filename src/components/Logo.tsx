import React from 'react';
import {
  ColorValue,
  Image,
  ImageRequireSource,
  ImageSourcePropType,
} from 'react-native';
import logos from '../assets/logos';

export type LogoName = 'tixl' | 'btc' | 'btc-cash' | 'monero';

type Props = {
  name: LogoName;
  size?: number;
  backgroundColor?: ColorValue;
};

export const Logo: React.FC<Props> = ({
  name,
  size = 36,
  backgroundColor = 'transparent',
}) => {
  // Replace with unknown logo (e.g. question mark)
  let source: ImageSourcePropType = logos.tixl;

  console.log(name);

  switch (name) {
    case 'btc':
      source = logos.bitcoin;
      break;
    case 'btc-cash':
      source = logos.bitcoinCash;
      break;
    case 'monero':
      source = logos.monero;
      break;
    case 'tixl':
      source = logos.tixl;
      break;
    default:
      break;
  }

  return (
    <Image
      source={source}
      style={{ width: size, height: size, backgroundColor: backgroundColor }}
    ></Image>
  );
};
