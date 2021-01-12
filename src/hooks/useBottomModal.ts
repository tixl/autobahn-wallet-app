import { State } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ModalType, uiActions } from '../redux/reducer/ui';
import { RootState } from '../redux/store';

// Get modal visibility state and control modal toggeling
export const useBottomModal = () => {
  const dispatch = useDispatch();

  const modalEnabled = useSelector((state: RootState) => state.ui.showModal);

  const modalType = useSelector((state: RootState) => state.ui.modalType);

  const showModal = (type: ModalType) => {
    dispatch(uiActions.openModal(type));
  };

  const hideModal = () => {
    dispatch(uiActions.closeModal());
  };

  return { modalEnabled, modalType, showModal, hideModal };
};
