import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';
import { useAccountChain } from '../hooks/useAccountChain';

export function TestShowKeys() {
  const keys = useSelector(getKeys);
  const ac = useAccountChain();

  return (
    <View>
      <Text>{JSON.stringify(keys)}</Text>
      <Text>{JSON.stringify(ac)}</Text>
    </View>
  );
}
