import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  BottomModal,
  HeaderBar,
  HeaderBarProps,
  Text,
  Toggle,
} from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, textSize } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions, UiState } from '../../redux/reducer/ui';
import { RootState } from '../../redux/store';

type Props = {
  children: React.ReactNode;
  headerBarConfig: HeaderBarProps;
  showHeaderBar?: boolean;
  disableTopPadding?: boolean;
  sidePadding?: number;
};

export const ScreenWrapper: React.FC<Props> = ({
  showHeaderBar = true,
  sidePadding = 0,
  ...props
}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  // Get modal data from store
  const { showModal }: UiState = useSelector((state: RootState) => state.ui);
  const closeModal = () => dispatch(uiActions.closeModal());

  return (
    <Container style={{ paddingTop: props.disableTopPadding ? 0 : insets.top }}>
      {showHeaderBar && props.headerBarConfig && (
        <HeaderBar {...props.headerBarConfig} />
      )}
      <ContentContainer>{props.children}</ContentContainer>
      <BottomModal
        isVisible={showModal}
        type="send"
        onClose={closeModal}
      ></BottomModal>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding: ${spacing.m}px ${spacing.s}px 0px;
`;
