import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useCustomHeaders from '../hooks/useCustomHeaders';
import { API_ROUTES } from '../utils/router';

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.baseMessages,
    prepareHeaders: useCustomHeaders,
  }),
  tagTypes: ['Message'],
  endpoints: (builder) => ({
    fetchMessages: builder.query({
      query: () => '',
    }),
    createMessage: builder.mutation({
      query: (newMessage) => ({
        method: 'POST',
        body: newMessage,
      }),
    }),
    updateMessage: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: id,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteMessage: builder.mutation({
      query: (id) => ({
        url: id,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchMessagesQuery,
  useCreateMessageMutation,
  useUpdateMessageMutation,
  useDeleteMessageMutation,
} = messagesApi;
