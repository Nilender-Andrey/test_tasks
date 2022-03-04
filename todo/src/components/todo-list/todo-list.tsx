import React from 'react';
import ItemTodo from './item-todo';

import './todo-list.css';

function TodoList() {
  return (
    <ul className="todo-list">
      <ItemTodo />
    </ul>
  );
}

export default TodoList;
