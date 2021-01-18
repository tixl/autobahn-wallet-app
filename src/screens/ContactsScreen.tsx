import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { generateKeys } from '@tixl/tixl-sdk-js/redux/keys/actions';

import { AssetCard, iconName, RoundButton } from '../components';
import { colors, spacing } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { useBottomModal } from '../hooks/useBottomModal';

type Props = {
  children?: string;
};

export const ContactsScreen: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { showModal } = useBottomModal();

  return (
    <ScreenWrapper headerBarConfig={{ type: 'value' }}>
      <ContactsContainer></ContactsContainer>
    </ScreenWrapper>
  );
};

const ButtonContainer = styled.View`
  padding: ${spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContactsContainer = styled.ScrollView``;

export default ContactsScreen;
