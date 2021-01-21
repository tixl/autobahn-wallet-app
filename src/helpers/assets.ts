export interface Asset {
  decimals: number;
  divisor: number;
  icon: string;
  name: string;
  symbol: string;
}

const assets: Record<string, Asset> = {
  TXL: {
    decimals: 7,
    divisor: 10000000,
    icon: require('../assets/logos/tixl.png'),
    name: 'Tixl',
    symbol: 'TXL',
  },
  BTC: {
    decimals: 8,
    divisor: 100000000,
    icon: require('../assets/logos/bitcoin.png'),
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  BCH: {
    decimals: 8,
    divisor: 100000000,
    icon: require('../assets/logos/bitcoin-cash.png'),
    name: 'Bitcoin Cash (coming soon)',
    symbol: 'BCH',
  },
  XMR: {
    decimals: 12,
    divisor: 1000000000000,
    icon: require('../assets/logos/monero.png'),
    name: 'Monero (coming soon)',
    symbol: 'XMR',
  },
  USD: {
    decimals: 2,
    divisor: 1,
    icon: require('../assets/logos/dollar.png'),
    name: 'US-Dollar',
    symbol: 'USD',
  },
};

export default assets;
