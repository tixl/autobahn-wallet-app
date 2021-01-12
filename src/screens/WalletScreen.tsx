import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { createAccountChain } from '@tixl/tixl-sdk-js/workflows/accountchain';
// import { keySet } from '@tixl/tixl-sdk-js/workflows/api/keyset';

import { crypto } from '../utils/crypto';

export default function WalletScreen() {
  const [accountChain, setAccountChain] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      // const keyset = await keySet(crypto);
      // const ac = await createAccountChain(crypto, keyset);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Wallet nice</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
