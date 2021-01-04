import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

export type ModalType = 'send' | 'receive' | 'deposit' | undefined;

export type UiState = {
  showModal: boolean;
  modalType: ModalType;
};

const initialState: UiState = {
  showModal: false,
  modalType: undefined,
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.modalType = action.payload;
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
      state.modalType = undefined;
    },
  },
});

export const { actions: uiActions, reducer: uiReducer } = ui;
