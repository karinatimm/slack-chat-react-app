import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import filter from 'leo-profanity';
import App from './App';
import AuthProvider from './context/auth/AuthProvider';
import store from './store';
import resources from './locales';
import DEFAULT_LANGUAGE from './utils/config';

const Init = async () => {
  const i18n = i18next.createInstance();

  await i18n.init({
    lng: DEFAULT_LANGUAGE,
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

  filter.loadDictionary('ru');
  filter.loadDictionary('en');

  return (
    <Provider store={store}>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </I18nextProvider>
      </React.StrictMode>
    </Provider>
  );
};

export default Init;
