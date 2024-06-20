import { createContext } from 'react';
import { DEFAULT_SOCKET_CONTEXT_VALUE } from '../../utils/config';

const SocketContext = createContext(DEFAULT_SOCKET_CONTEXT_VALUE);

export { SocketContext, DEFAULT_SOCKET_CONTEXT_VALUE };
