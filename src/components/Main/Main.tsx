import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import BooksListContainer from '../Books_list/Books_list_container';
import BookPageContainer from '../Book_page/Book_page_container';

import './Main.scss';

export default function Main() {
  const { idBook } = useSelector((state: RootState) => state.booksReducer);

  return <main className="main">{idBook ? <BookPageContainer /> : <BooksListContainer />}</main>;
}
