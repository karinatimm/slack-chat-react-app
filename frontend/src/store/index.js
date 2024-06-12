import { configureStore } from '@reduxjs/toolkit';
import { authenticateApi } from '../api/authApi.js';
import authUserReducer from './entities/authSlice.js';

export default configureStore({
  reducer: {
    [authenticateApi.reducerPath]: authenticateApi.reducer,
    authenticateUser: authUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticateApi.middleware),
});
