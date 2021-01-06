import React from 'react';
import { ColorValue, Image } from 'react-native';
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
  let source: NodeRequire = logos.tixl;

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
      source={require('../assets/logos/tixl.png')}
      style={{ width: size, height: size, backgroundColor: backgroundColor }}
    ></Image>
  );
};
