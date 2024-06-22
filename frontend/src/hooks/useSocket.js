import { useContext, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { channelsApi } from '../api/channelsApi';
import { messagesApi } from '../api/messagesApi';
import { switchChannel } from '../store/entities/appSlice';
import { SocketContext } from '../context/socketConnection/SocketContext';
import { DEFAULT_CHANNEL } from '../utils/config';

const useSocket = (currentChannelId) => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const handleFetchingNewMessage = useCallback(
    (newMessage) => {
      dispatch(
        messagesApi.util.updateQueryData(
          'fetchMessages',
          undefined,
          (existingMessages) => {
            existingMessages.push(newMessage);
          },
        ),
      );
    },
    [dispatch],
  );

  const handleFetchingNewChannel = useCallback(
    (newChannel) => {
      dispatch(
        channelsApi.util.updateQueryData(
          'fetchChannels',
          undefined,
          (existingChannels) => {
            existingChannels.push(newChannel);
          },
        ),
      );
    },
    [dispatch],
  );

  const handleRenamingChannel = useCallback(
    (updatedChannel) => {
      dispatch(
        channelsApi.util.updateQueryData(
          'fetchChannels',
          undefined,
          (existingChannels) => {
            const channel = existingChannels.find(
              (c) => c.id === updatedChannel.id,
            );
            if (channel) {
              channel.name = updatedChannel.name;
              dispatch(switchChannel({ name: channel.name, id: channel.id }));
            }
          },
        ),
      );
    },
    [dispatch],
  );

  const handleDeletingChannel = useCallback(
    ({ id }) => {
      dispatch(
        channelsApi.util.updateQueryData(
          'fetchChannels',
          undefined,
          (existingChannels) => existingChannels.filter((channel) => channel.id !== id),
        ),
      );
      dispatch(
        messagesApi.util.updateQueryData(
          'fetchMessages',
          undefined,
          (existingMessages) => existingMessages.filter((message) => message.channelId !== id),
        ),
      );
      if (currentChannelId === id) {
        dispatch(switchChannel(DEFAULT_CHANNEL));
      }
    },
    [currentChannelId, dispatch],
  );

  useEffect(() => {
    socket.on('newMessage', handleFetchingNewMessage);
    socket.on('newChannel', handleFetchingNewChannel);
    socket.on('renameChannel', handleRenamingChannel);
    socket.on('deleteChannel', handleDeletingChannel);

    return () => {
      socket.off('newMessage', handleFetchingNewMessage);
      socket.off('newChannel', handleFetchingNewChannel);
      socket.off('renameChannel', handleRenamingChannel);
      socket.off('deleteChannel', handleDeletingChannel);
    };
  }, [
    handleFetchingNewMessage,
    handleFetchingNewChannel,
    handleRenamingChannel,
    handleDeletingChannel,
    socket,
  ]);

  return socket;
};

export default useSocket;
