import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssetSymbol } from '@tixl/tixl-types';
import { Modal } from 'react-native';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

export type ModalType = 'send' | 'receive' | 'deposit';

export type ModalProps = {
  modalType: ModalType | undefined;
  asset: AssetSymbol | undefined;
  receiver?: string;
};

export interface ModalState extends ModalProps {
  modalVisible: boolean;
}

// Define initial state
const initialState: ModalState = {
  modalVisible: false,
  modalType: undefined,
  asset: undefined,
  receiver: undefined,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalProps>) => {
      state.modalType = action.payload.modalType;
      state.asset = action.payload.asset;
      state.receiver = action.payload.receiver;
      state.modalVisible = true;
    },
    closeModal: (state) => {
      state.modalType = undefined;
      state.asset = undefined;
      state.receiver = undefined;
      state.modalVisible = false;
    },
  },
});

export const { actions: modalActions, reducer: modalReducer } = modal;
