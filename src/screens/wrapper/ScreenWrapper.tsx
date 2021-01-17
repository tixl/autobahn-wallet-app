import React, { Children, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { BottomModal, HeaderBar, HeaderBarProps } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions, UiState } from '../../redux/reducer/ui';
import { RootState } from '../../redux/store';
import { useBottomModal } from '../../hooks/useBottomModal';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useUpdateLegal } from '../../hooks/useUpdateLegal';
import { Platform } from 'react-native';

type Props = {
  children: React.ReactNode;
  headerBarConfig?: HeaderBarProps;
  showHeaderBar?: boolean;
  disableTopPadding?: boolean;
  sidePadding?: number;
  fixed?: boolean;
};

export const ScreenWrapper: React.FC<Props> = ({
  showHeaderBar = true,
  sidePadding = 0,
  fixed = false,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const { modalEnabled, hideModal } = useBottomModal();
  const { updateLegal } = useUpdateLegal();
  const route = useRoute();
  const navigation = useNavigation();

  useFocusEffect(() => {
    if (updateLegal) {
      navigation.navigate('Legal');
    }
  });

  return (
    <KeyBoardAvoidingContainer
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      enabled
      keyboardVerticalOffset={0}
    >
      <Container
        style={{ paddingTop: props.disableTopPadding ? 0 : insets.top }}
      >
        {showHeaderBar && props.headerBarConfig && (
          <HeaderBar {...props.headerBarConfig} />
        )}
        <ContentContainer>{props.children}</ContentContainer>
        <BottomModal
          isVisible={modalEnabled}
          type="send"
          onClose={hideModal}
        ></BottomModal>
      </Container>
    </KeyBoardAvoidingContainer>
  );
};

const KeyBoardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: auto;
`;

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  overflow: hidden;
  padding: 0px ${spacing.s}px;
`;
