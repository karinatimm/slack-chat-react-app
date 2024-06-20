import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useCustomHeaders from '../hooks/useCustomHeaders';
import { API_ROUTES } from '../utils/router';

export const channelsApi = createApi({
  reducerPath: 'channelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTES.baseChannels,
    prepareHeaders: useCustomHeaders,
  }),
  tagTypes: ['Channel'],
  endpoints: (builder) => ({
    fetchChannels: builder.query({
      query: () => '',
      providesTags: ['Channel'],
    }),
    createChannel: builder.mutation({
      query: (newChannel) => ({
        method: 'POST',
        body: newChannel,
      }),
      invalidatesTags: ['Channel'],
    }),
    updateChannel: builder.mutation({
      query: ({ id, ...otherData }) => ({
        url: id,
        method: 'PATCH',
        body: otherData,
      }),
      invalidatesTags: ['Channel'],
    }),
    deleteChannel: builder.mutation({
      query: ({ id }) => ({
        url: id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Channel'],
    }),
  }),
});

export const {
  useFetchChannelsQuery,
  useCreateChannelMutation,
  useUpdateChannelMutation,
  useDeleteChannelMutation,
} = channelsApi;
