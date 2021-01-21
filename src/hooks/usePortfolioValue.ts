import { AssetSymbol } from '@tixl/tixl-types';

import { useBalance } from './useBalance';
import useDollarValue from './useDollarValue';

export default function usePortfolioValue(): string | undefined {
  const balanceBtc = useBalance(AssetSymbol.BTC);
  const btcDollar = useDollarValue(balanceBtc.toString(), AssetSymbol.BTC);
  const balanceTxl = useBalance(AssetSymbol.TXL);
  const txlDollar = useDollarValue(balanceTxl.toString(), AssetSymbol.TXL);

  if (btcDollar === undefined && txlDollar === undefined) return undefined;

  if (btcDollar === undefined && txlDollar !== undefined) return txlDollar;

  if (btcDollar !== undefined && txlDollar === undefined) return btcDollar;

  return (Number(btcDollar) + Number(txlDollar)).toString();
}
