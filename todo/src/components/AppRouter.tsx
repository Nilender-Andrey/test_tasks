import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main_page/Main_page';
import TodoPage from '../pages/todo_page/Todo_page';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="todo" element={<TodoPage />} />
      <Route
        path="*"
        element={<MainPage />}
      />
    </Routes>
  );
}

export default AppRouter;
