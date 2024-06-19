import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { toggleModal, switchChannel } from '../../store/entities/appSlice';

const ChannelButton = ({ channel, onClick, isActive }) => (
  <Button
    type="button"
    variant={isActive ? 'secondary' : 'light'}
    className="w-100 rounded-0 text-start text-truncate"
    onClick={onClick}
  >
    <span className="me-1">#</span>
    {channel.name}
  </Button>
);

const ChannelDropdown = ({ onDelete, onRename }) => {
  const { t } = useTranslation();

  return (
    <Dropdown.Toggle split variant="secondary" className="flex-grow-0">
      <span className="visually-hidden">{t('homePage.manageChannel')}</span>
      <Dropdown.Menu>
        <Dropdown.Item href="#" onClick={onDelete}>
          {t('homePage.modalWindow.deleteDropMenu')}
        </Dropdown.Item>
        <Dropdown.Item href="#" onClick={onRename}>
          {t('homePage.modalWindow.renameDropMenu')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Toggle>
  );
};

const ChannelListItem = ({ channel, isToolbar }) => {
  const dispatch = useDispatch();
  const { currentChannel } = useSelector((state) => state.appManaging);

  const handleClick = () => {
    dispatch(switchChannel({ name: channel.name, id: channel.id }));
  };

  const handleDeletingChannel = () => {
    dispatch(
      toggleModal({
        isOpen: true,
        type: 'deletingChannel',
        currentlyBeingEditedChannelId: channel.id,
        currentlyBeingEditedChannel: channel.name,
      })
    );
  };

  const handleRenamingChannel = () => {
    dispatch(
      toggleModal({
        isOpen: true,
        type: 'renamingChannel',
        currentlyBeingEditedChannelId: channel.id,
        currentlyBeingEditedChannel: channel.name,
      })
    );
  };

  if (isToolbar) {
    return (
      <Dropdown as={ButtonGroup} id="dropdown" className="d-flex">
        <ChannelButton
          channel={channel}
          onClick={handleClick}
          isActive={currentChannel === channel.name}
        />
        <ChannelDropdown
          channel={channel}
          onDelete={handleDeletingChannel}
          onRename={handleRenamingChannel}
        />
      </Dropdown>
    );
  }

  return (
    <ChannelButton
      channel={channel}
      onClick={handleClick}
      isActive={currentChannel === channel.name}
    />
  );
};

export default ChannelListItem;
