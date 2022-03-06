import React from 'react';

import './Task_add.css';

interface IFormAddTaskProps {
  data: {
    title: string;
  };

  fun: {
    onInputTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlerCancel: () => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  };
}

function FormAddTask({ data, fun }: IFormAddTaskProps) {
  const { title } = data;
  const { onInputTitle, handlerCancel, handleSubmit } = fun;

  return (
    <form className='form-add-task' onSubmit={handleSubmit}>
      <div className='form-add-task__wrap'>
        <p className='form-add-task__title'>Что должно быть сделано?</p>
        <div className='form-add-task__input-wrap'>
          <input
            className='form-add-task__input-text'
            onInput={onInputTitle}
            value={title}
            type='text'
          />
        </div>
      </div>

      <div className='form-add-task__btn-wrap'>
        <button className='form-add-task__btn-submit custom__btn' type='submit'>
          <img src='./assets/img/ok.png' alt='ok' />
        </button>
        <button className='form-add-cancel custom__btn' type='button' onClick={handlerCancel}>
          <img src='./assets/img/remove.png' alt='cancel' />
        </button>
      </div>
    </form>
  );
}

export default FormAddTask;
