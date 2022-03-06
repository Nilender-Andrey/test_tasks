import React from 'react';

import CustomButton from '../custom_button/custom_button';
import { ITask } from '../../store/reducers/tasks/task_slice';

interface IFunTask {
  removeTask: (id: string) => {
    payload: string;
    type: string;
  };
  toggleOption: (id: string) => {
    payload: string;
    type: string;
  };
  toggleImportant: (id: string) => {
    payload: string;
    type: string;
  };
  toComplete: (id: string) => {
    payload: string;
    type: string;
  };
  change: (id: string) => {
    payload: string;
    type: string;
  };
}
interface IItemTodo {
  task: ITask;
  fun: IFunTask;
}

function ItemTodo({ task, fun }: IItemTodo) {
  const { id, title, completed, important, options } = task;

  const { toggleOption, removeTask, toggleImportant, toComplete, change } = fun;

  return (
    <li className='item-todo'>
      <CustomButton nameClass='сompleted' handler={() => toComplete(id)}>
        <img src={completed ? './assets/img/checked.png' : './assets/img/stop.png'} alt='сompleted' />
      </CustomButton>

      <div className={`item-todo__info ${completed && 'checked'} ${
        important && 'important'
      }`}
      >
        <p className='item-todo__title'>{title}</p>
      </div>

      <div className={options
        ? 'item-todo__btn-wrap item-todo__btn-wrap_open'
        : 'item-todo__btn-wrap'}
      >
        <CustomButton nameClass='сhange' handler={() => change(id)}>
          <img src='./assets/img/note.png' alt='сhange' />
        </CustomButton>

        <CustomButton nameClass='important' handler={() => toggleImportant(id)}>
          <img
            src={important ? './assets/img/important.png' : './assets/img/not_important.png'}
            alt='important'
          />
        </CustomButton>

        <CustomButton nameClass='remove' handler={() => removeTask(id)}>
          <img src='./assets/img/remove.png' alt='important' />
        </CustomButton>

        <CustomButton nameClass='option' handler={() => toggleOption(id)}>
          <img src='./assets/img/option.png' alt='option' />
        </CustomButton>
      </div>
    </li>
  );
}

export default ItemTodo;
