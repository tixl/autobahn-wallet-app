import { useState, useEffect } from 'react';
import LRU from 'lru-cache';

import { getUsdValue, symbol2asset } from '../requests/getUsdValue';

const cache = new LRU({
  max: 100,
  maxAge: 1000 * 60 * 10, // in ms = 10 minutes
});

export default function useDollarValue(balance: string, asset: string) {
  const key = '' + balance + asset;
  const cached = cache.get(key);

  const [compVal, setCompVal] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function run() {
      if (!asset || !balance) {
        setCompVal(undefined);

        return;
      }

      if (!cached && cached !== '0') {
        const usdFloat = await updateCache(key, balance, asset);
        setCompVal(usdFloat);
      } else {
        setCompVal(cached as string);
      }
    }

    run();
  });

  return compVal;
}

// do not call backend twice for 5 seconds
const reqCache = new LRU({
  max: 10,
  maxAge: 1000 * 5,
});

function updateCache(
  key: string,
  balance: string,
  symbol: string
): Promise<string> {
  const runningReq = reqCache.get(key);

  if (runningReq) return runningReq as Promise<string>;

  const nextReq = new Promise<string>(async (resolve) => {
    const asset = symbol2asset[symbol];
    const usdFloat = await getUsdValue(asset, balance);

    if (usdFloat) {
      cache.set(key, usdFloat);
      resolve(usdFloat);
    } else {
      cache.set(key, undefined);
      resolve(undefined);
    }
  });

  reqCache.set(key, nextReq);

  return nextReq;
}
