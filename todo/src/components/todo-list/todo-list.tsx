import React, { useEffect } from 'react';

import fetchTasks from '../../store/reducers/tasks/fetch_tasks';
import { taskSlice } from '../../store/reducers/tasks/task_slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import TechnicalInfo from '../technical-info/technical-info';
import ItemTodo from './item-todo';

import './todo-list.css';

function TodoList() {
  const dispatch = useAppDispatch();
  const {
    tasks, page, isLoading,
    error,
  } = useAppSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(fetchTasks({ page }));
  }, [page]);

  const { remove, option, important, complete, change } = taskSlice.actions;

  const fun = {
    removeTask: (id: string) => { dispatch(remove(id)); },
    toggleOption: (id: string) => { dispatch(option(id)); },
    toggleImportant: (id: string) => { dispatch(important(id)); },
    toComplete: (id: string) => { dispatch(complete(id)); },
    change: (id: string) => { dispatch(change(id)); },
  };

  return (
    <>
      <ul className='todo-list'>
        {tasks.map((task) => (
          <ItemTodo task={task} fun={fun} key={task.id} />
        ))}
      </ul>
      {(isLoading || error) ? <TechnicalInfo isLoading error={error} /> : null}
    </>
  );
}

export default TodoList;
