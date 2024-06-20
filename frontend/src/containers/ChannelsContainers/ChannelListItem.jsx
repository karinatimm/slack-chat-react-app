import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { toggleModal, switchChannel } from '../../store/entities/appSlice';
import ChannelBtnInVerticalToolbar from '../../components/ChannelsComponents/ChannelBtnInVerticalToolbar';
import ChannelDropdown from '../../components/ChannelsComponents/ChannelDropdown';

const ChannelListItem = ({ channel, isChannelCreatedByUser }) => {
  const dispatch = useDispatch();
  const { currentChannel } = useSelector((state) => state.appManaging);

  const handleSwitchingChannel = () => {
    dispatch(switchChannel({ name: channel.name, id: channel.id }));
  };

  const handleDeletingChannel = () => {
    dispatch(
      toggleModal({
        isOpen: true,
        type: 'deletingChannel',
        currEditedChannelId: channel.id,
        currEditedChannel: channel.name,
      }),
    );
  };

  const handleRenamingChannel = () => {
    dispatch(
      toggleModal({
        isOpen: true,
        type: 'renamingChannel',
        currEditedChannelId: channel.id,
        currEditedChannel: channel.name,
      }),
    );
  };

  if (isChannelCreatedByUser) {
    return (
      <Dropdown as={ButtonGroup} id="dropdown" className="d-flex">
        <ChannelBtnInVerticalToolbar
          channel={channel}
          onClick={handleSwitchingChannel}
          isActive={currentChannel === channel.name}
        />
        <ChannelDropdown
          onDelete={handleDeletingChannel}
          onRename={handleRenamingChannel}
        />
      </Dropdown>
    );
  }

  return (
    <ChannelBtnInVerticalToolbar
      channel={channel}
      onClick={handleSwitchingChannel}
      isActive={currentChannel === channel.name}
    />
  );
};

export default ChannelListItem;
