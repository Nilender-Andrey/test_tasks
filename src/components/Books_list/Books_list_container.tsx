import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIdBook, changeIsLoading } from '../../state/books_state';

import { RootState } from '../../state/store';
import BooksList from './Books_list';

export default function BooksListContainer() {
  const { books, foundQuantity, startIndex } = useSelector(
    (state: RootState) => state.booksReducer,
  );

  const dispatch = useDispatch();

  const handlerClickMoreBooks = () => {
    dispatch(changeIsLoading(true));
  };

  const handlerClickOneBook = (id: string) => {
    dispatch(addIdBook(id));
  };

  const data = {
    books,
    foundQuantity,
    startIndex,
    handlerClickMoreBooks,
    handlerClickOneBook,
  };

  return <BooksList data={data} />;
}
