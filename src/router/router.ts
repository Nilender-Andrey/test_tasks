import React from 'react';
import ContactsPage from '../pages/contacts-page/Contacts-page';
import LoginPage from '../pages/login-page/Login-page';

export interface IRoute {
  path: string;
  title: string;
  component: React.ComponentType;
}

export enum RouteNames {
  LOGIN = '/',
  CONTACTS = '/contacts',
}

export const publicRoutes = [
  { path: RouteNames.LOGIN, component: LoginPage, title: 'Login' },
];

export const privateRoutes = [
  { path: RouteNames.CONTACTS, component: ContactsPage, title: 'Contacts' },
];
