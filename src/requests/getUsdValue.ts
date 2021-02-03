import axios from 'axios';

export const symbol2asset: Record<string, string> = {
  BTC: 'bitcoin',
  TXL: 'tixl-new',
};

export const getUsdValue = async (
  asset: string,
  balance: string
): Promise<string | undefined> => {
  if (balance === '0') return '0';

  try {
    console.info('call wallet backend for usd price', asset);

    console.log(
      `${process.env.REACT_APP_BACKEND}/backend/asset2dollars?asset=${asset}&balance=${balance}`
    );

    const { data } = await axios.get<{ usd: string }>(
      `${process.env.REACT_APP_BACKEND}/backend/asset2dollars?asset=${asset}&balance=${balance}`
    );

    return data.usd;
  } catch (err) {
    console.error(err);

    return undefined;
  }
};
