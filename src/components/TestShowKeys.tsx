import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getKeys } from '@tixl/tixl-sdk-js/redux/keys/selectors';

export function TestShowKeys() {
  const keys = useSelector(getKeys);

  return (
    <View>
      <Text>{JSON.stringify(keys)}</Text>
    </View>
  );
}
