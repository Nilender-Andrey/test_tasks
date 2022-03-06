import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

interface INavProps{
  links:{
     id:number, name:string, href:string
  }[]
}

function Nav({ links }:INavProps) {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {links.map(({ id, name, href }) => (
          <li className='nav__item' key={id}>
            <NavLink className='nav__link' to={href}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
