import React from 'react';
import styled from 'styled-components/native';
import { ModalType } from '../../redux/reducer/ui';
import ReactNativeModal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ModalContentSend } from './modal-contents';

type Props = {
  children?: React.ReactNode;
  isVisible: boolean;
  type?: ModalType;
  initialStep?: string;
  onClose: () => any;
};

export const BottomModal: React.FC<Props> = (props) => {
  var modalContent: React.ReactNode = null;

  const modalType: ModalType = useSelector(
    (state: RootState) => state.ui.modalType
  );

  switch (modalType) {
    case 'send':
      modalContent = <ModalContentSend></ModalContentSend>;
      break;
    case 'receive':
      modalContent = <PlaceholderContent></PlaceholderContent>;
      break;
    case 'deposit':
      modalContent = <PlaceholderContent></PlaceholderContent>;
      break;
    default:
      modalContent = null;
      break;
  }

  return (
    <ReactNativeModal
      isVisible={props.isVisible}
      swipeDirection={['down']}
      style={{ justifyContent: 'flex-end', margin: 0 }}
      backdropOpacity={0.7}
      coverScreen={true}
      avoidKeyboard={true}
      animationInTiming={300}
      animationOutTiming={300}
      hideModalContentWhileAnimating={false}
      onBackdropPress={props.onClose}
      onSwipeComplete={props.onClose}
    >
      <Container>{modalContent}</Container>
    </ReactNativeModal>
  );
};

const Container = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;

const PlaceholderContent = styled.View`
  height: 400px;
  background-color: white;
`;
