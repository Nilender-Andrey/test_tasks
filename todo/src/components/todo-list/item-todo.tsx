import React from 'react';
import { ITask } from '../../models/models';

interface ItemTodoProps {
  task: ITask;
  fun: {
    removeTask: (id: string) => void;
    toggleOption: (id: string) => void;
    toggleImportant: (id: string) => void;
    toComplete: (id: string) => void;
    change: (id: string) => void;
  };
}

function ItemTodo({ task, fun }: ItemTodoProps) {
  const { id, title, completed, important, options } = task;

  const { toggleOption, removeTask, toggleImportant, toComplete, change } = fun;

  return (
    <li className='item-todo'>
      <button
        className='item-todo__btn custom__btn'
        type='button'
        onClick={() => toComplete(id)}
      >
        <img
          src={completed ? './assets/img/checked.png' : './assets/img/stop.png'}
          alt='сompleted'
        />
      </button>

      <div
        className={`item-todo__info ${completed && 'checked'} ${
          important && 'important'
        }`}
      >
        <p className='item-todo__title'>{title}</p>
      </div>

      <div
        className={
          options
            ? 'item-todo__btn-wrap item-todo__btn-wrap_open'
            : 'item-todo__btn-wrap'
        }
      >
        <button
          className='item-todo__btn custom__btn'
          type='button'
          onClick={() => change(id)}
        >
          <img src='./assets/img/note.png' alt='сhange' />
        </button>

        <button
          className='item-todo__btn custom__btn'
          type='button'
          onClick={() => toggleImportant(id)}
        >
          <img
            src={
              important
                ? './assets/img/important.png'
                : './assets/img/not_important.png'
            }
            alt='important'
          />
        </button>

        <button
          className='item-todo__btn custom__btn'
          type='button'
          onClick={() => removeTask(id)}
        >
          <img src='./assets/img/remove.png' alt='important' />
        </button>

        <button
          className='item-todo__btn custom__btn'
          type='button'
          onClick={() => toggleOption(id)}
        >
          <img src='./assets/img/option.png' alt='option' />
        </button>
      </div>
    </li>
  );
}

export default ItemTodo;
