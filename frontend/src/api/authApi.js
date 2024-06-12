import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import useAuthHeaders from '../hooks/useAuthHeaders';
import { API_ROUTES } from '../utils/router';

export const authenticateApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.base,
    // prepareHeaders: useAuthHeaders,
  }),
  endpoints: (builder) => ({
    logInRequest: builder.mutation({
      query: (existingUser) => ({
        url: API_ROUTES.login,
        method: 'POST',
        body: existingUser,
      }),
    }),
    signUpRequest: builder.mutation({
      query: (newUser) => ({
        url: API_ROUTES.signup,
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const {
  useLogInRequestMutation: useAuthenticateLogin,
  useSignUpRequestMutation: useAuthenticateSignUp,
} = authenticateApi;
