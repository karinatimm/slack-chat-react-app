import React from 'react';
import { Provider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { I18nextProvider } from 'react-i18next';
import { io } from 'socket.io-client';
import i18next from 'i18next';
import filter from 'leo-profanity';
import App from './App';
import AuthProvider from './context/authentication/AuthProvider';
import SocketProvider from './context/socketConnection/SocketProvider.jsx';
import store from './store/store';
import resources from './locales/index.js';
import DEFAULT_LANGUAGE from './utils/config';

const Init = async () => {
  const socket = io();
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

  const rollbarConfig = {
    accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
    environment: 'production',
  };

  return (
    <React.StrictMode>
      <RollbarProvider config={rollbarConfig}>
        <ErrorBoundary>
          <Provider store={store}>
            <I18nextProvider i18n={i18n}>
              <SocketProvider socket={socket}>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </SocketProvider>
            </I18nextProvider>
          </Provider>
        </ErrorBoundary>
      </RollbarProvider>
    </React.StrictMode>
  );
};

export default Init;
