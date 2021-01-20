import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ContactsScreen } from '../../../../screens';

const ContactsStack = createStackNavigator();

const ContactsStackScreen = ({ initialRouteName = 'Contacts' }) => (
  <ContactsStack.Navigator
    headerMode="none"
    initialRouteName={initialRouteName}
  >
    <ContactsStack.Screen name="Contacts" component={ContactsScreen} />
  </ContactsStack.Navigator>
);

export default ContactsStackScreen;
