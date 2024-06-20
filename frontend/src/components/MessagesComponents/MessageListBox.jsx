import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import extractCurrentChannelMessages from '../../utils/messageUtils';

const MessageListBox = ({ messages, children }) => {
  const { currentChannel, currentChannelId } = useSelector(
    (state) => state.appManaging,
  );
  const { t } = useTranslation();

  const currentChannelMessages = extractCurrentChannelMessages(
    messages,
    currentChannelId,
  );
  const numOfMessages = currentChannelMessages.length;

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{currentChannel?.name}</b>
          </p>
          <span className="text-muted">
            {t('homePage.countMessages.messages', { count: numOfMessages })}
          </span>
        </div>
        <div id="messages-box" className="chat-messages overflow-auto px-5">
          {currentChannelMessages.map((message) => (
            <div className="text-break mb-2" key={message.id}>
              <b>{message.username}</b>
              {': '}
              {message.body}
            </div>
          ))}
        </div>
        <div className="mt-auto px-5 py-3">{children}</div>
      </div>
    </div>
  );
};

export default MessageListBox;
