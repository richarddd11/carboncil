import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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

// Detekuj jazyk podľa domény
const hostLanguageMap = {
  'carboncil.cz': 'cs',
  'www.carboncil.cz': 'cs',
  'carboncil.sk': 'sk',
  'www.carboncil.sk': 'sk',
  'carboncil.es': 'es',
  'www.carboncil.es': 'es',
  'carboncil.de': 'de',
  'www.carboncil.de': 'de',
  'carboncil.pl': 'pl',
  'www.carboncil.pl': 'pl',
  'carboncil.hr': 'hr',
  'www.carboncil.hr': 'hr',
  'carboncil.co.uk': 'en',
  'www.carboncil.co.uk': 'en',
};

const currentHost = window.location.hostname;
const detectedLang = hostLanguageMap[currentHost] || 'sk';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectedLang, // nastav jazyk podľa domény
    fallbackLng: 'sk',
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
