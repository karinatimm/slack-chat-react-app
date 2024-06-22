import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useFetchChannelsQuery } from '../../api/channelsApi';
import { useFetchMessagesQuery } from '../../api/messagesApi';
import { toggleModal } from '../../store/entities/appSlice';
import ChannelsListToolbar from '../../containers/ChannelsContainers/ChannelsListToolbar';
import MessageListBox from '../../containers/MessagesContainers/MessageListBox';
import CreatingNewMessage from '../../containers/MessagesContainers/CreatingNewMessage';
import { SocketContext } from '../../context/socketConnection/SocketContext';
import RenderModalSwitcher from '../../components/ModalRenderingComponents/RenderModalSwitcher';
import 'react-toastify/dist/ReactToastify.css';
import useSocket from '../../hooks/useSocket';

const HomePageComponent = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const { modal } = useSelector((state) => state.appManaging);
  const { data: channels } = useFetchChannelsQuery();
  const { data: messages } = useFetchMessagesQuery();

  const handleClosingModalWindow = () => {
    dispatch(toggleModal({ isOpen: false, type: null }));
  };

  useSocket(socket);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <ChannelsListToolbar channels={channels} />

        <MessageListBox messages={messages}>
          <CreatingNewMessage />
        </MessageListBox>
      </div>
      <RenderModalSwitcher
        isOpen={modal.isOpen}
        type={modal.type}
        handleClosingModalWindow={handleClosingModalWindow}
      />
      <ToastContainer />
    </div>
  );
};

export default HomePageComponent;
