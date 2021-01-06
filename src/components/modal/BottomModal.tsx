import React from 'react';
import styled from 'styled-components/native';
import { ModalType } from '../../redux/reducer/ui';
import ReactNativeModal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ModalContentSend } from './modal-contents';
import { shapes, windowHeight } from '../../constants';
import { useBottomModal } from '../../hooks/useBottomModal';

type Props = {
  children?: React.ReactNode;
  isVisible: boolean;
  type?: ModalType;
  initialStep?: string;
  onClose: () => any;
};

export const BottomModal: React.FC<Props> = (props) => {
  var modalContent: React.ReactNode = null;

  const { modalType } = useBottomModal();

  switch (modalType) {
    case 'send':
      modalContent = <ModalContentSend />;
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
      avoidKeyboard={false}
      animationInTiming={300}
      animationOutTiming={300}
      hideModalContentWhileAnimating={false}
      onBackdropPress={props.onClose}
      onSwipeComplete={props.onClose}
    >
      <ContentContainer>{modalContent}</ContentContainer>
    </ReactNativeModal>
  );
};

const ContentContainer = styled.View`
  border-top-left-radius: ${shapes.borderRadius}px;
  border-top-right-radius: ${shapes.borderRadius}px;
  overflow: hidden;
  min-height: ${windowHeight * 0.5};
  background-color: white;
`;

const PlaceholderContent = styled.View`
  height: 400px;
  background-color: white;
`;
