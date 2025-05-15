import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './locales/es/translation.json';
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';
import translationSK from './locales/sk/translation.json';
import translationHR from './locales/hr/translation.json';
import translationCS from './locales/cs/translation.json';


const resources = {
  cs: { translation: translationCS },
  es: { translation: translationES },
  de: { translation: translationDE },
  en: { translation: translationEN },
  pl: { translation: translationPL },
  sk: { translation: translationSK },
  hr: { translation: translationHR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sk',
    interpolation: {
      escapeValue: false,
    },
  });

  i18n.on('languageChanged', (lng) => {
    document.documentElement.setAttribute('lang', lng);
  });

export default i18n;
