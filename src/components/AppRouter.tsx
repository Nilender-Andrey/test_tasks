import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ContactsPage from '../pages/contacts-page/Contacts-page';
import LoginPage from '../pages/login-page/Login-page';
import { privateRoutes, publicRoutes } from '../router/router';
import { useAppSelector } from '../store/store';

function AppRouter() {
  const { isAuth } = useAppSelector((state) => state.authorizationReducer);
  const navigation = useNavigate();

  const routes = isAuth ? privateRoutes : publicRoutes;
  const redirectPage = isAuth ? <ContactsPage /> : <LoginPage />;

  useEffect(() => {
    navigation(isAuth ? '/contacts' : '/');
  }, [isAuth, navigation]);

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path='*' element={redirectPage} />
    </Routes>
  );
}

export default AppRouter;
