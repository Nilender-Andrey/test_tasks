import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import BookCard from '../Book_card/Book_card';

import './Book_list.scss';

export default function BookList() {
  const books = useSelector((state: RootState) => state.booksReducer.books);
  const foundQuantity = useSelector((state: RootState) => state.booksReducer.foundQuantity);
  return (
    <div className="book-list">
      <h3 className="book-list__title">{`Found ${foundQuantity} books`}</h3>

      <div className="wrap-list">
        {books.map((data) => (
          <BookCard data={data} key={data.id} />
        ))}
      </div>
      <button className="book-list__button" type="button">
        Load more
      </button>
    </div>
  );
}
