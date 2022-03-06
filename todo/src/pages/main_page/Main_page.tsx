import React from 'react';

import logo from '../../assets/svg/logo.svg';

import './Main_page.css';

function MainPage() {
  return (
    <div className='main_page page'>
      <div className='main_page__body'>
        <div className='main_page__logo'>
          <img src={logo} alt='Логотип' />
        </div>
        <div className='main_page__info'>
          <h1 className='main_page__title'>To Do</h1>
          <p className='main_page__text'>Kраткое описание страницы:</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
