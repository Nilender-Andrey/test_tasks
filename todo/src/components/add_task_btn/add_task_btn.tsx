import React from 'react';
import { taskSlice } from '../../store/reducers/tasks/task_slice';
import { useAppDispatch } from '../../store/store';

import './add_task_btn.css';

function AddTaskBtn() {
  const dispatch = useAppDispatch();
  const { taskFormOpen } = taskSlice.actions;

  const onClickHandler = () => dispatch(taskFormOpen());

  return (
    <div className='add-task-btn'>
      <button className='add-task-btn__btn btn' type='button' onClick={onClickHandler}>
        +
      </button>
    </div>
  );
}

export default AddTaskBtn;
