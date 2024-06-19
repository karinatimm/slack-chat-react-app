import { createContext } from 'react';

const defaultSocketContextValue = {
  socket: {},
};

const SocketContext = createContext(defaultSocketContextValue);

export { SocketContext, defaultSocketContextValue };
