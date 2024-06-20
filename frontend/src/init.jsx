import React from 'react';
import { Provider } from 'react-redux';
import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import { I18nextProvider } from 'react-i18next';
import { io } from 'socket.io-client';
import App from './App';
import AuthProvider from './context/authentication/AuthProvider';
import SocketProvider from './context/socketConnection/SocketProvider.jsx';
import store from './store/store';
import initializeI18n from './utils/i18nConfig';
import initializeFilter from './utils/filterConfig';
import rollbarConfig from './utils/rollbarConfig';

const Init = async () => {
  const socket = io();
  const i18n = await initializeI18n();

  initializeFilter();

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
