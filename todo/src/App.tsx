import React from 'react';
import AppRouter from './components/AppRouter';

import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
