import React from 'react';
import { taskSlice } from '../../store/reducers/tasks/task_slice';
import { useAppDispatch, useAppSelector } from '../../store/store';

import './Task_add.css';

function TaskAdd() {
  const { newTask } = useAppSelector((state) => state.taskReducer);
  const { title } = newTask;
  const dispatch = useAppDispatch();
  const { addNewTaskTitle } = taskSlice.actions;

  const onInputTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(addNewTaskTitle(value));
  };

  return (
    <div className="add-task">
      <form className="add-task__form form-add-task">
        <div className="form-add-task__wrap">
          <p className="form-add-task__title">Что должно быть сделано?</p>
          <div className="form-add-task__input-wrap">
            <input className="form-add-task__input-text" onInput={onInputTitle} value={title} type="text" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskAdd;
