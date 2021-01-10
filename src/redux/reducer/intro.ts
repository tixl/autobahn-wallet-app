import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

export type IntroState = {
  appIntroFinished: boolean;
  onboardingFinished: boolean;
  loggedIn: boolean;
};

const initialState: IntroState = {
  appIntroFinished: true,
  // Not used so far (no onboarding integrated in app)
  onboardingFinished: false,
  // Placholder, that will later be replaced, e.g. with a (client) token
  loggedIn: true,
};

const intro = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    setIntroAppFinished: (state, action: PayloadAction<boolean>) => {
      state.appIntroFinished = action.payload;
    },
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { actions: introActions, reducer: introReducer } = intro;
