import React from 'react';
import AddChannelComponent from './CreatingChannelModal';
import RenameChannelComponent from './RenamingChannelModal';
import DeleteChannelComponent from './DeletingChannelModal';

const RenderModalSwitcher = ({ isOpen, type, handleClosingModalWindow }) => {
  if (!isOpen) return null;

  let ModalComponent;

  switch (type) {
    case 'addingChannel':
      ModalComponent = AddChannelComponent;
      break;
    case 'deletingChannel':
      ModalComponent = DeleteChannelComponent;
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
