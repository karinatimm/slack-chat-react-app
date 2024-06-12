import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './utils/router';
import Login from './pages/Login/LogInPageComponent.jsx';
import SignUp from './pages/SignUp/SignUpPageComponent.jsx';
import NotFound from './pages/NotFound/NotFoundPageComponent.jsx';
import Home from './pages/Home/HomePageComponent.jsx';
import PrivateRoute from './containers/Routes/PrivateRoute.jsx';
import MainNav from './components/MainNav.jsx';

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
  <BrowserRouter>
    <div className="d-flex flex-column h-100">
      <MainNav />
      <Routes>
        {Object.entries(ROUTES).map(([key, path]) => (
          <Route key={key} path={path} element={getElement(key)} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
