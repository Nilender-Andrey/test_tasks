import React from 'react';

import importantImg from '../../assets/img/important.png';
import notImportantImg from '../../assets/img/not_important.png';
import completedImg from '../../assets/img/checked.png';
import notCompletedImg from '../../assets/img/stop.png';
import noteImg from '../../assets/img/note.png';
import removeImg from '../../assets/img/remove.png';
import optionImg from '../../assets/img/option.png';
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
        <img src={completed ? completedImg : notCompletedImg} alt='сompleted' />
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
          <img src={noteImg} alt='сhange' />
        </CustomButton>

        <CustomButton nameClass='important' handler={() => toggleImportant(id)}>
          <img
            src={important ? importantImg : notImportantImg}
            alt='important'
          />
        </CustomButton>

        <CustomButton nameClass='remove' handler={() => removeTask(id)}>
          <img src={removeImg} alt='important' />
        </CustomButton>

        <CustomButton nameClass='option' handler={() => toggleOption(id)}>
          <img src={optionImg} alt='option' />
        </CustomButton>
      </div>
    </li>
  );
}

export default ItemTodo;
