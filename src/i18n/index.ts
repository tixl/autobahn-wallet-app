import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';
import resources from './resources';

let locale;
let languageCode = 'en';

if (Platform.OS === 'ios') {
  locale = NativeModules.SettingsManager.settings.AppleLocale; // "fr_FR"
  if (locale === undefined) {
    // iOS 13 workaround, take first of AppleLanguages array  ["en", "en-NZ"]
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
  }
} else if (Platform.OS === 'android') {
  locale = NativeModules.I18nManager.localeIdentifier;
}

if (locale) {
  languageCode = locale.substring(0, 2);
}

const languageDetector = {
  cacheUserLanguage: () => ({}),
  detect: () => languageCode,
  init: () => ({}),
  type: 'languageDetector' as 'languageDetector',
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,

    // lng: 'de',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
      wait: true,
    },
  });

export default i18n;
