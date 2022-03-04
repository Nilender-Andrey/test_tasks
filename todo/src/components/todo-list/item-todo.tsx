import React, { useState } from 'react';

import importantImg from '../../assets/img/important.png';
import notImportantImg from '../../assets/img/not_important.png';
import completedImg from '../../assets/img/checked.png';
import notCompletedImg from '../../assets/img/stop.png';
import noteImg from '../../assets/img/note.png';
import removeImg from '../../assets/img/remove.png';
import optionImg from '../../assets/img/option.png';

import CustomButton from '../custom_button/custom_button';

function ItemTodo() {
  const [completed, setCompleted] = useState<boolean>(false);
  const [important, setImportant] = useState<boolean>(false);
  const [options, setOptions] = useState<boolean>(false);

  const onToggleСompleted = () => {
    setCompleted((s) => !s);
  };

  const onToggleImportant = () => {
    setImportant((i) => !i);
    setOptions(false);
  };

  const сhange = () => {
    setOptions(false);
    console.log('сhange');
  };
  const remove = () => {
    console.log('remove');
  };
  const onToggleOption = () => {
    setOptions((o) => !o);
  };

  return (
    <li className="item-todo">
      <CustomButton nameClass="сompleted" handler={onToggleСompleted}>
        <img src={completed ? completedImg : notCompletedImg} alt="сompleted" />
      </CustomButton>

      <div
        className={`item-todo__info ${completed && 'checked'} ${
          important && 'important'
        }`}
      >
        <p className="item-todo__title">Выпить кофе</p>
      </div>

      <div
        className={`item-todo__btn-wrap ${
          options ? 'item-todo__btn-wrap_open' : ''
        }`}
      >
        <CustomButton
          nameClass="option"
          handler={onToggleOption}
        >
          <img src={optionImg} alt="option" />
        </CustomButton>

        <CustomButton
          nameClass="сhange"
          handler={сhange}
        >
          <img src={noteImg} alt="сhange" />
        </CustomButton>

        <CustomButton
          nameClass="important"
          handler={onToggleImportant}
        >
          <img
            src={important ? importantImg : notImportantImg}
            alt="important"
          />
        </CustomButton>

        <CustomButton
          nameClass="remove"
          handler={remove}
        >
          <img src={removeImg} alt="important" />
        </CustomButton>
      </div>
    </li>
  );
}

export default ItemTodo;
