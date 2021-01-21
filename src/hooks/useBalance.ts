import JSBI from 'jsbi';
import { AssetSymbol } from '@tixl/tixl-types';

import { useAccountChain } from './useAccountChain';

// TODO extend return type to JSBI | undefined
// components should work with undefined, instead of balance = 0
export const useBalance = (symbol: AssetSymbol): JSBI => {
  const accountChain = useAccountChain();

  if (!accountChain) return JSBI.BigInt(0);

  const assetLeaf = accountChain.leafAsset(symbol);

  if (!assetLeaf) return JSBI.BigInt(0);

  return JSBI.BigInt(assetLeaf.senderBalance);
};
