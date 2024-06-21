import ReactDOM from 'react-dom/client';
import init from './init';

const renderApp = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const app = await init();
  root.render(app);
};

renderApp();
