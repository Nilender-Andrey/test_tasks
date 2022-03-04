import React from 'react';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';

import './Header.css';

function Header() {
  const links = [
    { id: 1, name: 'На главную', href: '/' },
    { id: 2, name: 'К списку задач', href: '/todo' },
  ];

  return (
    <header className="header">
      <Logo />
      <Nav links={links} />
    </header>
  );
}

export default Header;
