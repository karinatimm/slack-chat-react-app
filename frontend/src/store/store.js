import { configureStore } from '@reduxjs/toolkit';
import authSlice from './entities/authSlice';
import appSlice from './entities/appSlice';
import { authenticateApi } from '../api/authApi';
import { channelsApi } from '../api/channelsApi';
import { messagesApi } from '../api/messagesApi';

const store = configureStore({
  reducer: {
    [authenticateApi.reducerPath]: authenticateApi.reducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
    authenticateUser: authSlice,
    appManaging: appSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authenticateApi.middleware,
      channelsApi.middleware,
      messagesApi.middleware
    ),
});

export default store;
