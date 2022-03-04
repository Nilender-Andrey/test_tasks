import React from 'react';
import MainPage from '../pages/main_page/Main_page';
import TodoPage from '../pages/todo_page/Todo_page';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  MAIN = '/',
  TODO = '/todo',
}

export const publicRoutes = [
  { path: RouteNames.MAIN, component: MainPage },
  { path: RouteNames.TODO, component: TodoPage },
];
