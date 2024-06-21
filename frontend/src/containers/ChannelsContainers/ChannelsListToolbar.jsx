import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleModal, setChannels } from '../../store/entities/appSlice';
import addChannelBtnImg from '../../assets/imgHomePage/plus-btn-channel.png';
import ChannelListItem from './ChannelListItem';
import extractChannelNames from '../../utils/channelUtils';

const ChannelsListToolbar = ({ channels }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (channels) {
      const channelNames = extractChannelNames(channels);

      dispatch(setChannels(channelNames));
    }
  }, [channels, dispatch]);

  const handleOpeningAddChannelModal = () => {
    dispatch(toggleModal({ isOpen: true, type: 'addingChannel' }));
  };

  return (
    <div
      className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex"
      style={{ minHeight: '100vh' }}
    >
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <b>{t('homePage.channels')}</b>
        <button
          type="button"
          className="p-0 text-primary btn btn-group-vertical"
          onClick={handleOpeningAddChannelModal}
        >
          <img
            src={addChannelBtnImg}
            alt={t('homePage.createNewChannel')}
            width="25"
            height="25"
          />
          <span className="visually-hidden">+</span>
        </button>
      </div>
      <ul
        id="channels-box"
        className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
        style={{ minHeight: 'calc(100vh - 100px)' }}
      >
        {channels?.map((channel) => (
          <li key={channel.id} className="nav-item w-100">
            <ChannelListItem
              channel={channel}
              isChannelCreatedByUser={channel.removable}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelsListToolbar;
