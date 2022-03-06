import React from 'react';
import { taskSlice } from '../../store/reducers/tasks/task_slice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import FormAddTask from './Form_add_task';

import './Task_add.css';

function TaskAdd() {
  const { formAddTask, taskFormOpen } = useAppSelector(
    (state) => state.taskReducer,
  );
  const { title } = formAddTask;
  const dispatch = useAppDispatch();
  const { addTaskTitle, taskFormCancel, addTask } = taskSlice.actions;

  const onInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(addTaskTitle(value));
  };

  const handlerCancel = () => {
    dispatch(taskFormCancel());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask());
  };

  const data = { title };
  const fun = { onInputTitle, handlerCancel, handleSubmit };

  document.body.style.overflowY = taskFormOpen ? 'hidden' : 'auto';

  return (
    <div className={taskFormOpen ? 'add-task' : 'add-task add-task_closed'}>
      <FormAddTask data={data} fun={fun} />
    </div>
  );
}

export default TaskAdd;
