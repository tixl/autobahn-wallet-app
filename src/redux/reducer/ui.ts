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
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setModalType: (state, action: PayloadAction<ModalType>) => {
      state.modalType = action.payload;
    },
  },
});

export const { actions: uiAction, reducer: uiReducer } = ui;
