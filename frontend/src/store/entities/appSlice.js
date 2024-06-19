/* eslint no-param-reassign: "error" */

import { createSlice } from '@reduxjs/toolkit';

const defaultChannel = {
  name: 'general',
  id: '1',
};

const initialState = {
  channels: [],
  currentChannel: defaultChannel.name,
  currentChannelId: defaultChannel.id,
  currentlyBeingEditedChannel: null,
  currentlyBeingEditedChannelId: null,
  modal: {
    isOpen: false,
    type: null,
  },
  messages: {
    byChannelId: {},
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    switchChannel: (state, action) => {
      const { name, id } = action.payload;
      state.currentChannel = name;
      state.currentChannelId = id;
    },
    toggleModal: (state, action) => {
      const {
        isOpen,
        type,
        currentlyBeingEditedChannel,
        currentlyBeingEditedChannelId,
      } = action.payload;
      state.modal.isOpen = isOpen;
      state.modal.type = type;
      state.currentlyBeingEditedChannel = currentlyBeingEditedChannel || null;
      state.currentlyBeingEditedChannelId =
        currentlyBeingEditedChannelId || null;
    },
    setChannels: (state, action) => {
      state.channels = action.payload;
    },
    clearMessages: (state) => {
      state.messages.byChannelId[state.currentChannelId] = [];
    },
  },
});

export const { switchChannel, toggleModal, setChannels, clearMessages } =
  appSlice.actions;

export default appSlice.reducer;
