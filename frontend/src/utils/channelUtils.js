const extractChannelNames = (channelsData) =>
  channelsData?.map(({ name }) => name) ?? [];
export default extractChannelNames;
