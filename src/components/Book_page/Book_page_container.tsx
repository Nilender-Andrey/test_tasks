import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../../api/api';
import { removeIdBook } from '../../state/books_state';
import { RootState } from '../../state/store';
import Book_page from './Book_page';

export default function BookPageContainer() {
  const { idBook, book, isLoadingOne } = useSelector((state: RootState) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook(idBook));
  }, []);

  const handlerBtnBack = () => {
    dispatch(removeIdBook());
  };

  return <Book_page book={book} handlerBtnBack={handlerBtnBack} isLoadingOne={isLoadingOne} />;
}
