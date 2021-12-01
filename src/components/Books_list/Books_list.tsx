import React from 'react';
import { BookType } from '../../state/books_state';
import BookCard from '../Book_card/Book_card';
import Loading from '../UI/Loading/Loading';

import './Books_list.scss';

interface BooksListProps {
  data: {
    books: BookType[];
    foundQuantity: number;
    startIndex: number;
    isLoading: boolean;
    handlerClickMoreBooks: () => void;
    handlerClickOneBook: (e: string) => void;
  };
}

export default function BooksList({ data }: BooksListProps) {
  const {
    books,
    foundQuantity,
    startIndex,
    handlerClickMoreBooks,
    handlerClickOneBook,
    isLoading,
  } = data;

  const bookListTitle =
    data.foundQuantity === -1
      ? 'No results were found for your search'
      : 'Enter your query or click search';

  return (
    <div className="books-list">
      {isLoading && <Loading />}
      {books.length ? (
        <>
          <h3 className="books-list__title">{`Found ${foundQuantity} books`}</h3>

          <div className="wrap-list">
            {books.map((book) => (
              <BookCard book={book} handlerClickOneBook={handlerClickOneBook} key={book.id} />
            ))}
          </div>
          {startIndex >= foundQuantity ? null : (
            <button className="books-list__button" type="button" onClick={handlerClickMoreBooks}>
              Load more
            </button>
          )}
        </>
      ) : (
        <h3 className="books-list__title">{bookListTitle}</h3>
      )}
    </div>
  );
}
