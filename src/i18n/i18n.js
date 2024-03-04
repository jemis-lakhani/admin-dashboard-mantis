// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files for each language
import enDashboard from './en/en.json';
import jaDashboard from './ja/ja.json';
import koDashboard from './ko/ko.json';
import zhDashboard from './zh/zh.json';
import thDashboard from './th/th.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enDashboard },
    ko: { translation: koDashboard },
    zh: { translation: zhDashboard },
    ja: { translation: jaDashboard },
    th: { translation: thDashboard }
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
