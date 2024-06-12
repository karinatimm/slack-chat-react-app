import React from 'react';
import ReactDOM from 'react-dom/client';
import Init from './init';

const renderApp = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = await Init();
  root.render(<React.StrictMode>{app}</React.StrictMode>);
};

renderApp();
