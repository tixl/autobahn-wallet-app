import React, { Children } from 'react';
import styled from 'styled-components/native';
import { BottomModal, HeaderBar, HeaderBarProps } from '../../components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { spacing } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions, UiState } from '../../redux/reducer/ui';
import { RootState } from '../../redux/store';
import { useBottomModal } from '../../hooks/useBottomModal';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  const route = useRoute();
  const navigation = useNavigation();

  console.log(route.name);

  return (
    <Container style={{ paddingTop: props.disableTopPadding ? 0 : insets.top }}>
      {showHeaderBar && props.headerBarConfig && (
        <HeaderBar {...props.headerBarConfig} />
      )}
      <ContentContainer>{props.children}</ContentContainer>
      {/* {props.children} */}
      <BottomModal
        isVisible={modalEnabled}
        type="send"
        onClose={hideModal}
      ></BottomModal>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  overflow: hidden;
  padding: 0px ${spacing.s}px;
`;
