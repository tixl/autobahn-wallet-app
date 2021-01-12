import Constants from 'expo-constants';
import * as MailComposer from 'expo-mail-composer';
import { Alert, Linking } from 'react-native';

export const sendMailAsync = async (recipient, subject, body, userId, errorMessage) => {
  const bodyWithDeviceInfo = `${body}\n\n\n\n\n\n\n\n### Support Information ###\n\nApp Version:\n${Constants.nativeAppVersion}\n\nUnique User ID:\n${userId}`;

  const mailConfiguration = {
    recipients: [recipient],
    subject,
    body: bodyWithDeviceInfo,
  };

  try {
    await MailComposer.composeAsync(mailConfiguration);
  } catch (error) {
    const link = `mailto:${recipient}?subject=${subject}&body=${bodyWithDeviceInfo}`;
    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
          return Linking.openURL(link);
        } else if (errorMessage) {
          return Alert.alert(errorMessage.errorTitle, errorMessage.errorMessage);
        }
      })
      .catch(() => {
        Alert.alert(errorMessage.errorTitle, errorMessage.errorMessage);
      });
  }
};
