import React from 'react';

import './todo-list.css';

function TodoList() {
  return (
    <ul className="todo-list">

      <li className="todo-list__item item-todo">
        <div className="item-todo__checkbox">
          <input type="checkbox" name="" id="" />
        </div>
        <div className="item-todo__info">
          <p className="item-todo__title">Выпить кофе</p>
        </div>
      </li>

    </ul>
  );
}

export default TodoList;
