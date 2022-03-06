import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';

import './Logo.css';

function Logo() {
  return (
    <div className='logo'>
      <Link className='logo__link' to='/'>
        <img src={logo} alt='Логотип' />
      </Link>

    </div>
  );
}

export default Logo;
