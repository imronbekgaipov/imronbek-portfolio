import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import uz from './locales/uz.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uz: { translation: uz },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    defaultNS: 'translation',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'portfolio-language',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Sync <html lang=""> on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

// Set initial lang attribute
document.documentElement.lang = i18n.language;

export default i18n;
