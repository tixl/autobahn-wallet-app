import { createSlice } from '@reduxjs/toolkit';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

const intro = createSlice({
  name: 'intro',
  initialState: {
    appIntroFinished: false,
  },
  reducers: {
    setIntroAppFinished: (state, action) => {
      const { finished } = action.payload;
      state.appIntroFinished = finished;
    },
  },
});

export const { actions: introActions, reducer: introReducer } = intro;
