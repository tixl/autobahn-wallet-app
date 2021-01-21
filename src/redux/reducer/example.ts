import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssetSymbol } from '@tixl/tixl-types';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

export type ExampleState = {
  assets: AssetSymbol[];
  mnemonicPhrase: string[];
};

// Define initial state
const initialState: ExampleState = {
  assets: [AssetSymbol.TXL, AssetSymbol.BTC],
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
    addAsset: (state, action: PayloadAction<AssetSymbol>) => {
      state.assets.push(action.payload);
    },
  },
});

export const { actions: exampleActions, reducer: exampleReducer } = example;
