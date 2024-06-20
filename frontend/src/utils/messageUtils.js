const extractCurrentChannelMessages = (messages, currentChannelId) => messages
  ? messages.filter((message) => message.channelId === currentChannelId)
  : [];

export default extractCurrentChannelMessages;
