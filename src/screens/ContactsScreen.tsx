import React, { useEffect, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { generateKeys } from '@tixl/tixl-sdk-js/redux/keys/actions';

import { AssetCard, iconName, RoundButton } from '../components';
import { colors, spacing } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { ScreenWrapper } from './wrapper/ScreenWrapper';
import { useBottomModal } from '../hooks/useBottomModal';
import * as Contacts from 'expo-contacts';
import ContactsStackScreen from '../navigation/stacks/root/tabs/ContactsStack';
import { RootState } from '../redux/store';

type Props = {
  children?: string;
};

export const ContactsScreen: React.FC<Props> = (props) => {
  const state = useSelector((state: RootState) => state);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { openModal } = useBottomModal();

  // Use contacts from redux state
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <ScreenWrapper headerBarConfig={{ type: 'value' }}>
      <ContactsContainer>
        {/* {contacts.map((contact, index) => (
          <Contact key={index}>
            {contact.firstName} {contact.lastName}
          </Contact>
        ))} */}
        <Contact>{JSON.stringify(state)}</Contact>
      </ContactsContainer>
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

const Contact = styled.Text``;

export default ContactsScreen;
