import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import ReactNativeModal from 'react-native-modal';
import {
  ModalContentConfirm,
  ModalContentReceive,
  ModalContentSend,
} from './modal-contents';
import { shapes, spacing, windowHeight } from '../../constants';
import { useBottomModal } from '../../hooks/useBottomModal';
import { AssetSymbol } from '@tixl/tixl-types';
import { ADDRESSES } from 'expo-contacts';
import {
  ReceiveModalProps,
  SendConfirmModalProps,
  SendModalProps,
} from '../../redux/reducer/modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {};

export const BottomModal: React.FC<Props> = () => {
  var modalContent: React.ReactNode = null;
  const insets = useSafeAreaInsets();

  var [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

  const { type, props, closeModal, modalVisible } = useBottomModal();

  useEffect(() => {
    if (!props) {
      modalContent = null;
      return;
    }
    switch (type) {
      case 'send':
        setModalContent(<ModalContentSend {...(props as SendModalProps)} />);
        break;
      case 'sendConfirm':
        setModalContent(
          <ModalContentConfirm {...(props as SendConfirmModalProps)} />
        );
        break;
      case 'receive':
        setModalContent(
          <ModalContentReceive {...(props as ReceiveModalProps)} />
        );
        break;
      case 'deposit':
        setModalContent(<PlaceholderContent />);
        break;
      default:
        modalContent = null;
        break;
    }
  }, [type, props, modalVisible]);

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
      <DragIcon></DragIcon>
      <ContentContainer>{modalContent}</ContentContainer>
    </ReactNativeModal>
  );
};

const ContentContainer = styled.SafeAreaView`
  border-top-left-radius: ${shapes.borderRadius}px;
  border-top-right-radius: ${shapes.borderRadius}px;
  overflow: hidden;
  background-color: white;
  max-height: ${windowHeight * 0.9}px; ;
`;

const PlaceholderContent = styled.View`
  height: 150px;
  background-color: white;
`;

const DragIcon = styled.View`
  align-self: center;
  margin-bottom: ${spacing.xs}px;
  width: 35px;
  height: 5px;
  border-radius: 5px;
  opacity: 0.5;
  background-color: white;
`;
