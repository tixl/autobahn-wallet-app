import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { textSize, colors, spacing, fonts } from '../../constants';
import { ModalType, uiActions, UiState } from '../../redux/reducer/ui';
import { ReactNativeModal as RNModal } from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ReactNativeModal from 'react-native-modal';

type Props = {
  children: React.ReactNode;
  isVisible: boolean;
  type?: ModalType;
  initialStep?: string;
  onClose: () => any;
};

export const BottomModal: React.FC<Props> = (props) => {
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
      <Container>{props.children}</Container>
    </ReactNativeModal>
  );
};

const Container = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
`;
