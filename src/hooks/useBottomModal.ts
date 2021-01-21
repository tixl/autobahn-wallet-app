import { useDispatch, useSelector } from 'react-redux';
import { modalActions, ModalProps } from '../redux/reducer/modal';
import { RootState } from '../redux/store';

// Get modal visibility state and control modal toggeling
export const useBottomModal = () => {
  const dispatch = useDispatch();

  const { modalVisible, modalType, asset, receiver } = useSelector(
    (state: RootState) => state.modal
  );

  const openModal = (config: ModalProps) => {
    dispatch(modalActions.openModal(config));
  };

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  return { modalVisible, modalType, openModal, closeModal, asset, receiver };
};
