import React from 'react';
import { Button } from 'react-bootstrap';

const ChannelBtnInVerticalToolbar = ({ channel, onClick, isActive }) => (
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

export default ChannelBtnInVerticalToolbar;
