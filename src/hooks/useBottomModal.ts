import { useDispatch, useSelector } from 'react-redux';
import {
  DepositModalProps,
  modalActions,
  ReceiveModalProps,
  SendConfirmModalProps,
  SendModalProps,
} from '../redux/reducer/modal';
import { RootState } from '../redux/store';

// Get modal visibility state and control modal toggeling
export const useBottomModal = () => {
  const dispatch = useDispatch();

  const { modalVisible, type, props } = useSelector(
    (state: RootState) => state.modal
  );

  const openSendModal = (props: SendModalProps) => {
    dispatch(modalActions.openSendModal(props));
  };

  const openSendConfirmModal = (props: SendConfirmModalProps) => {
    dispatch(modalActions.openSendConfirmModal(props));
  };

  const openReceiveModal = (props: ReceiveModalProps) => {
    dispatch(modalActions.openReceiveModal(props));
  };

  const openDepositModal = (props: DepositModalProps) => {
    dispatch(modalActions.openDepositModal(props));
  };

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return {
    modalVisible,
    type,
    props,
    openSendModal,
    openSendConfirmModal,
    openReceiveModal,
    openDepositModal,
    closeModal,
  };
};
