import React from 'react';
import JSBI from 'jsbi';
import N from 'numeral';

import assets from '../helpers/assets';
import { AssetSymbol } from '@tixl/tixl-types';

N.localeData('en').abbreviations = {
  thousand: 'k',
  million: 'm',
  billion: 'bn',
  trillion: 't',
};

// turn a user input value into a valid big integer amount
export function parseAssetValue(value: string, symbol: AssetSymbol) {
  // check for invalid chars
  // eslint-disable-next-line no-useless-escape
  if (!/^[0-9\.]+$/.test(value)) return JSBI.BigInt(0);

  if (!value) return JSBI.BigInt(0);

  const divisor = JSBI.BigInt(assets[symbol].divisor);
  const assetDecimals = assets[symbol].decimals;

  if (value.indexOf('.') === -1) {
    // e.g. 1
    return JSBI.multiply(JSBI.BigInt(value), divisor);
  }

  // e.g. "567.00123"
  const [num, decimals] = value.split('.');
  const numInt = JSBI.BigInt(num);

  // 567.xx => 5670000000
  const resultInt = JSBI.multiply(numInt, divisor);

  // xx.00123 => 0012300
  // cut of everything after the possible decimal length
  const shortDecimals = decimals.substr(0, assetDecimals);
  const decInt = JSBI.BigInt(shortDecimals.padEnd(assetDecimals, '0'));

  // add both parts so that 567000000 + 0012300 turns into 5670012300
  return JSBI.add(resultInt, decInt);
}

export function parseAssetValue2Currency(
  amount: string | number | JSBI | undefined,
  symbol = AssetSymbol.TXL
) {
  if (amount === undefined) {
    return 0.0;
  }

  let num: JSBI;

  try {
    num = JSBI.BigInt(amount);
  } catch (error) {
    return 0.0;
  }

  if (JSBI.EQ(JSBI.BigInt(0), num)) return 0.0;
  const divisor = JSBI.BigInt(assets[symbol].divisor);
  const decimals = assets[symbol].decimals;
  if (JSBI.GE(num, divisor)) {
    const str = amount.toString().split('');
    const commaIndex = str.length - decimals;
    str.splice(commaIndex, 0, '.');
    let usdNumber = str.join('');
    if (Number(usdNumber) >= 1000000) {
      usdNumber = `${N(usdNumber).format('0.000a')}`;
    } else if (Number(usdNumber) >= 100000) {
      usdNumber = N(usdNumber).format(`0,0.00[000000]`);
    } else if (Number(usdNumber) >= 10000) {
      usdNumber = N(usdNumber).format(`0,0.00[000000]`);
    } else {
      usdNumber = N(usdNumber).format(`0,0.00[000000]`);
    }
    return usdNumber;
  }

  if (JSBI.LT(num, divisor)) {
    // amount is smaller than 1, show e.g. 0.0001234

    // in case the number is too small
    // JS default transformation to string is something like "1e-7"
    // this is the reason why we need a special rendering
    return `0.${num.toString().padStart(decimals, '0')}`;
  }
}

interface Props {
  amount: string | number | JSBI | undefined;
  symbol: AssetSymbol | string;
}

const CurrencyValue: React.FC<Props> = ({
  amount,
  symbol = AssetSymbol.TXL,
}) => {
  if (amount === undefined) {
    return <React.Fragment>?</React.Fragment>;
  }

  let num: JSBI;

  try {
    num = JSBI.BigInt(amount);
  } catch (error) {
    return <React.Fragment>?</React.Fragment>;
  }

  if (JSBI.EQ(JSBI.BigInt(0), num))
    return <React.Fragment>0.00</React.Fragment>;

  const divisor = JSBI.BigInt(assets[symbol].divisor);
  const decimals = assets[symbol].decimals;

  if (JSBI.GE(num, divisor)) {
    const str = amount.toString().split('');
    const commaIndex = str.length - decimals;
    str.splice(commaIndex, 0, '.');
    let usdNumber = str.join('');
    if (Number(usdNumber) >= 1000000) {
      usdNumber = `${N(usdNumber).format('0.000a')}`;
    } else if (Number(usdNumber) >= 100000) {
      if (symbol === 'USD') {
        usdNumber = N(usdNumber).format(`0,0`);
      } else {
        usdNumber = N(usdNumber).format(`0,0.00[000000]`);
      }
    } else if (Number(usdNumber) >= 10000) {
      if (symbol === 'USD') {
        usdNumber = N(usdNumber).format(`0,0.0`);
      } else {
        usdNumber = N(usdNumber).format(`0,0.00[000000]`);
      }
    } else {
      if (symbol === 'USD') {
        usdNumber = N(usdNumber).format(`0,0.00`);
      } else {
        usdNumber = N(usdNumber).format(`0,0.00[000000]`);
      }
    }
    return <React.Fragment>{usdNumber}</React.Fragment>;
  }

  if (JSBI.LT(num, divisor)) {
    // amount is smaller than 1, show e.g. 0.0001234
    const numberFormat = N(
      `0.${num.toString().padStart(decimals, '0')}`
    ).format(`0.00[000000]`);

    // in case the number is too small
    // JS default transformation to string is something like "1e-7"
    // this is the reason why we need a special rendering
    if (numberFormat === 'NaN') {
      return (
        <React.Fragment>{`0.${num
          .toString()
          .padStart(decimals, '0')}`}</React.Fragment>
      );
    }

    return <React.Fragment>{numberFormat}</React.Fragment>;
  }

  return <React.Fragment>?</React.Fragment>;
};

export default CurrencyValue;
