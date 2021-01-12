import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LogoName } from '../../components';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

export type ExampleHistory = {
  sender: string;
  receiver: string;
  amount: number;
  date: Date;
};

export type ExampleAsset = {
  name: string;
  prefix: string;
  logo: LogoName;
  value: number;
  valueUsd: number;
  history: ExampleHistory[];
};

export type ExampleState = {
  assets: ExampleAsset[];
  portfolioValue: number;
  mnemonicPhrase: string[];
};

// Define initial state
const initialState: ExampleState = {
  assets: [
    {
      name: 'Tixl',
      prefix: 'TXL',
      logo: 'tixl',
      value: 34.29,
      valueUsd: 289.19,
      history: [],
    },
    {
      name: 'Bitcoin',
      prefix: 'BTC',
      logo: 'btc',
      value: 984.54,
      valueUsd: 100.82,
      history: [],
    },
    {
      name: 'Bitcoin Cash',
      prefix: 'BTH',
      logo: 'btc-cash',
      value: 984.54,
      valueUsd: 100.82,
      history: [],
    },
    {
      name: 'Monero',
      prefix: 'XMR',
      logo: 'monero',
      value: 984.54,
      valueUsd: 100.82,
      history: [],
    },
  ],
  portfolioValue: 23.31,
  mnemonicPhrase: [
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
    'north',
    'secret',
    'prison',
    'burden',
  ],
};

const example = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<ExampleAsset>) => {
      state.assets.push(action.payload);
    },
  },
});

export const { actions: exampleActions, reducer: exampleReducer } = example;
