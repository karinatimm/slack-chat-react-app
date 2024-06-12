/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') ?? null,
  username: localStorage.getItem('username') ?? null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { token, username } = action.payload;
      state.token = token;
      state.username = username;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
    },
    clearUserData: (state) => {
      state.token = null;
      state.username = null;
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const { setUserData, clearUserData } = authSlice.actions;
const authUserReducer = authSlice.reducer;
export default authUserReducer;
