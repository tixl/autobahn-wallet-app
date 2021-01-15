import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

export type IntroState = {
  userToken: string | null;
  isSignout: boolean;
  appIntroFinished: boolean;
  onboardingFinished: boolean;
  legalTermVersion: number | undefined;
  newestLegalTermVersion: number;
  trackingAccepted: boolean;
};

const initialState: IntroState = {
  // Placholder, that will later be replaced, e.g. with a (client) token
  userToken: null,
  isSignout: false,
  appIntroFinished: false,
  // Not used so far (no onboarding integrated in app)
  onboardingFinished: false,
  legalTermVersion: 1,
  newestLegalTermVersion: 1,
  trackingAccepted: false,
};

const intro = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    login: (state) => {
      state.userToken = '123';
      state.isSignout = false;
    },
    logout: (state) => {
      state.userToken = null;
      state.isSignout = true;
    },
    setIntroAppFinished: (state, action: PayloadAction<boolean>) => {
      state.appIntroFinished = action.payload;
    },
    setOnboardingFinished: (state, action: PayloadAction<boolean>) => {
      state.onboardingFinished = action.payload;
    },
    setLegalTermVersion: (state, action: PayloadAction<number | undefined>) => {
      state.legalTermVersion = action.payload;
    },
    setTrackingAccepted: (state, action: PayloadAction<boolean>) => {
      state.trackingAccepted = action.payload;
    },
  },
});

export const { actions: introActions, reducer: introReducer } = intro;
