import React from 'react';
import AddChannelModalComponent from '../../containers/ModalContainers/AddingChannelModal';
import RenameChannelComponent from '../../containers/ModalContainers/RenamingChannelModal';
import DeleteChannelModalComponent from '../../containers/ModalContainers/DeletingChannelModal';

const RenderModalSwitcher = ({ isOpen, type, handleClosingModalWindow }) => {
  if (!isOpen) return null;

  let ModalComponent;

  switch (type) {
    case 'addingChannel':
      ModalComponent = AddChannelModalComponent;
      break;
    case 'deletingChannel':
      ModalComponent = DeleteChannelModalComponent;
      break;
    case 'renamingChannel':
      ModalComponent = RenameChannelComponent;
      break;
    default:
      console.error(`Invalid modal type: ${type}`);
      return null;
  }

  return <ModalComponent handleClosingModalWindow={handleClosingModalWindow} />;
};

export default RenderModalSwitcher;
