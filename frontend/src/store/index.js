import { configureStore } from '@reduxjs/toolkit';
import { authenticateApi } from '../api/authApi.js';
import userAuthReducer from './entities/authSlice.js';

export default configureStore({
  reducer: {
    [authenticateApi.reducerPath]: authenticateApi.reducer,
    userAuth: userAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticateApi.middleware),
});
