import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactsPage from '../pages/contacts-page/Contacts-page';
import LoginPage from '../pages/login-page/Login-page';
import { privateRoutes, publicRoutes } from '../router/router';

function AppRouter() {
  const auth = false;

  const routes = auth ? privateRoutes : publicRoutes;
  const redirectPage = auth ? <ContactsPage /> : <LoginPage />;

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} key={route.path} />
      ))}
      <Route path='*' element={redirectPage} />
    </Routes>
  );
}

export default AppRouter;
