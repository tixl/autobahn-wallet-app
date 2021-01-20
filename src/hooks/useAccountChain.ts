import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Blockchain, fromBlockchainObject } from '@tixl/tixl-types';
import { getAccountChain } from '@tixl/tixl-sdk-js/redux/chains/selectors';

export const useAccountChain = (): Blockchain | null => {
  const acObject = useSelector(getAccountChain);
  return useMemo(() => {
    if (!acObject) return null;
    return fromBlockchainObject(acObject);
  }, [acObject]);
};
