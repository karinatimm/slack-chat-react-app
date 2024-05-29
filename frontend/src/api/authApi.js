import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useAuthHeaders from '../hooks/useAuthHeaders';
import { API_ROUTES } from '../utils/router';

export const authenticateApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.base,
    prepareHeaders: useAuthHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (existingUser) => ({
        url: API_ROUTES.login,
        method: 'POST',
        body: existingUser,
      }),
    }),
    signUp: builder.mutation({
      query: (newUser) => ({
        url: API_ROUTES.signup,
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const {
  useLoginMutation: useAuthenticateLogin,
  useSignUpMutation: useAuthenticateSignUp,
} = authenticateApi;
