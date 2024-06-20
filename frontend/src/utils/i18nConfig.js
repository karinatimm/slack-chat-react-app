import i18next from 'i18next';
import resources from '../locales/index.js';
import { DEFAULT_LANGUAGE } from './config';

const initializeI18n = async () => {
  const i18n = i18next.createInstance();
  await i18n.init({
    lng: DEFAULT_LANGUAGE,
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
  return i18n;
};

export default initializeI18n;
