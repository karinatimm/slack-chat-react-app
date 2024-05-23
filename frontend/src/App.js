import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/router';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Home from './pages/Home/Home.jsx';
import PrivateRoute from './containers/Routes/PrivateRoute.jsx';

const getElement = (key) => {
  switch (key) {
    case 'homePage':
      return (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      );
    case 'login':
      return <Login />;
    case 'signup':
      return <SignUp />;
    default:
      return <NotFound />;
  }
};

const App = () => (
  <Routes>
    {Object.entries(ROUTES).map(([key, path]) => (
      <Route key={key} path={path} element={getElement(key)} />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default App;
