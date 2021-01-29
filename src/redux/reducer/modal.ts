import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AssetSymbol } from '@tixl/tixl-types';

/**
 * createSlice is a function that accepts an initial state,
 * an object full of reducer functions, and optionally a “slice name”,
 * and automatically generates action creators, action types, and selectors ready to be used.
 */

type ModalType = 'send' | 'sendConfirm' | 'receive' | 'deposit' | undefined;

type ModalBaseProps = {
  asset: AssetSymbol;
};

export type SendModalProps = ModalBaseProps & {
  address?: string;
  amount?: string;
  isAutobahn?: boolean;
};

export type SendConfirmModalProps = ModalBaseProps & {
  address: string;
  amount: string;
  isAutobahn: boolean;
  note?: string;
};

export type ReceiveModalProps = ModalBaseProps & {};

export type DepositModalProps = ModalBaseProps & {};

export type ModalState = {
  modalVisible: boolean;
  type: ModalType;
  props:
    | SendModalProps
    | SendConfirmModalProps
    | ReceiveModalProps
    | DepositModalProps
    | null;
};

// Define initial state
const initialState: ModalState = {
  modalVisible: false,
  type: undefined,
  props: null,
};

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSendModal: (state, action: PayloadAction<SendModalProps>) => {
      state.type = 'send';
      state.props = action.payload;
      state.modalVisible = true;
    },
    openSendConfirmModal: (
      state,
      action: PayloadAction<SendConfirmModalProps>
    ) => {
      state.type = 'sendConfirm';
      state.props = action.payload;
      state.modalVisible = true;
    },
    openReceiveModal: (state, action: PayloadAction<ReceiveModalProps>) => {
      state.type = 'receive';
      state.props = action.payload;
      state.modalVisible = true;
    },
    openDepositModal: (state, action: PayloadAction<DepositModalProps>) => {
      state.type = 'deposit';
      state.props = action.payload;
      state.modalVisible = true;
    },
    closeModal: (state) => {
      state.type = undefined;
      state.props = null;
      state.modalVisible = false;
    },
  },
});

export const { actions: modalActions, reducer: modalReducer } = modal;
