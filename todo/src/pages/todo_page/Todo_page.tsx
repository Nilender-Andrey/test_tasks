import React from 'react';
import AddTaskBtn from '../../components/add_task_btn/add_task_btn';
import Pagination from '../../components/pagination/Pagination';
import TaskAdd from '../../components/task_add/Task_add';

import TodoList from '../../components/todo-list/todo-list';

import './Todo_page.css';

function TodoPage() {
  return (
    <div className="todo-page page">
      <div className="todo-page__main">
        <TodoList />
        <Pagination />
      </div>
      <div className="todo-page__side-bar">
        <AddTaskBtn />
      </div>

      <TaskAdd />
    </div>
  );
}

export default TodoPage;
