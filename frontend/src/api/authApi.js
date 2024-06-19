import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROUTES } from '../utils/router';

export const authenticateApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.base,
  }),
  endpoints: (builder) => ({
    logInUser: builder.mutation({
      query: (existingUser) => ({
        url: API_ROUTES.login,
        method: 'POST',
        body: existingUser,
      }),
    }),
    signUpUser: builder.mutation({
      query: (newUser) => ({
        url: API_ROUTES.signup,
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const {
  useLogInUserMutation: useAuthenticateUserLogIn,
  useSignUpUserMutation: useAuthenticateUserSignUp,
} = authenticateApi;
