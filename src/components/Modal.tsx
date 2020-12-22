import React from 'react';
import { Modal as RNModal } from 'react-native-modal';

import { colors } from '../constants';

const Modal = ({
  children,
  visible,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  animationInTiming = 200,
  animationOutTiming = 200,
  swipeDirection = null,
  onBackdropPress,
  onSwipeComplete,
  backdropOpacity = 0.5,
}) => {
  const handleBackdropPress = () => {
    onBackdropPress && onBackdropPress();
  };

  const handleSwipeComplete = () => {
    handleSwipeComplete && handleSwipeComplete();
    onSwipeComplete && onSwipeComplete();
  };

  return (
    <RNModal
      useNativeDriver // When used, modal won't drag correctly.
      hideModalContentWhileAnimating
      isVisible={visible}
      animationIn={animationIn}
      animationOut={animationOut}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      backdropOpacity={backdropOpacity}
      backdropColor={colors.neutral900}
      swipeDirection={swipeDirection}
      onSwipeComplete={handleSwipeComplete}
      onBackdropPress={handleBackdropPress}
      style={{ margin: 0 }}
    >
      {children}
    </RNModal>
  );
};

export default Modal;
