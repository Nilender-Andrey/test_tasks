import React from 'react';
import AddTask from '../../components/add_task/add_task';
import TodoList from '../../components/todo-list/todo-list';

import './Todo_page.css';

function TodoPage() {
  return (
    <div className="todo_page page">
      <TodoList />
      <AddTask />
    </div>
  );
}

export default TodoPage;
