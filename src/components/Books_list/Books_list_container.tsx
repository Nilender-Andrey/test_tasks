import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIdBook, changeIsLoading, setOffSet } from '../../state/books_state';

import { RootState } from '../../state/store';
import BooksList from './Books_list';

export default function BooksListContainer() {
  const { books, foundQuantity, startIndex, isLoading, idBook, offset } = useSelector(
    (state: RootState) => state.booksReducer,
  );
  const offsetRef = useRef(0);

  const dispatch = useDispatch();

  const handlerClickMoreBooks = () => {
    dispatch(changeIsLoading(true));
  };

  const handlerClickOneBook = (id: string) => {
    dispatch(addIdBook(id));
    dispatch(setOffSet(offsetRef.current));
  };

  useEffect(() => {
    if (!idBook) {
      window.onscroll = () => {
        offsetRef.current = window.pageYOffset;
      };
      window.scrollTo(0, offset);
    }
  }, [idBook]);

  const data = {
    books,
    foundQuantity,
    startIndex,
    isLoading,
    handlerClickMoreBooks,
    handlerClickOneBook,
  };

  return <BooksList data={data} />;
}
function setOffset(pageYOffset: number): any {
  throw new Error('Function not implemented.');
}
