import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Intro: 'intro',
        Wallet: 'wallet',
      },
    },
  },
};
