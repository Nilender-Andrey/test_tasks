import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import MainContainer from './components/Main/Main_container';
import { RootState } from './state/store';

const App = function () {
  const books = useSelector((state: RootState) => state.booksReducer.books);
  const foundQuantity = useSelector((state: RootState) => state.booksReducer.foundQuantity);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Header />

      <MainContainer />
    </div>
  );
};
export default App;
