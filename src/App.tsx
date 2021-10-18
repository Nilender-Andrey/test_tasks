import React from 'react';

import './App.scss';
import HeaderСontainer from './components/Header/HeaderСontainer';
import MainСontainer from './components/Main/MainСontainer';

export default function App() {
  return (
    <div className="app">
      <HeaderСontainer />
      <MainСontainer />
    </div>
  );
}
