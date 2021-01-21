import React from 'react';
import styled from 'styled-components/native';
import { ModalType } from '../../redux/reducer/modal';
import ReactNativeModal from 'react-native-modal';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ModalContentSend } from './modal-contents';
import { shapes, windowHeight } from '../../constants';
import { useBottomModal } from '../../hooks/useBottomModal';
import { AssetSymbol } from '@tixl/tixl-types';

type Props = {};

export const BottomModal: React.FC<Props> = () => {
  var modalContent: React.ReactNode = null;

  const { modalType, modalVisible, closeModal } = useBottomModal();

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
      isVisible={modalVisible}
      swipeDirection={['down']}
      style={{ justifyContent: 'flex-end', margin: 0 }}
      backdropOpacity={0.7}
      coverScreen={true}
      avoidKeyboard={true}
      animationInTiming={300}
      animationOutTiming={300}
      hideModalContentWhileAnimating={false}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
    >
      <ContentContainer>{modalContent}</ContentContainer>
    </ReactNativeModal>
  );
};

const ContentContainer = styled.View`
  border-top-left-radius: ${shapes.borderRadius}px;
  border-top-right-radius: ${shapes.borderRadius}px;
  overflow: hidden;
  min-height: ${windowHeight * 0.5}px;
  background-color: white;
`;

const PlaceholderContent = styled.View`
  height: 400px;
  background-color: white;
`;
