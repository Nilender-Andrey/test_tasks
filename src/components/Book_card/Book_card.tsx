import React from 'react';
import { BookType } from '../../state/books_state';

import './Book_card.scss';

interface BookCardProps {
  book: BookType;
  handlerClickOneBook: (e: string) => void;
}

export default function BookCard({ book, handlerClickOneBook }: BookCardProps) {
  const { imageLinks, title, categories, authors } = book.volumeInfo;

  return (
    <div className="book-card" onClick={() => handlerClickOneBook(book.id)}>
      <div className="book-card__img-wrap">
        {imageLinks && imageLinks.thumbnail ? (
          <img className="book-card__img" src={imageLinks.thumbnail} alt="book cover" />
        ) : (
          ''
        )}
      </div>
      <div className="book-card__info-wrap">
        <p className="book-card__title">{title}</p>

        <div className="book-card__authors">
          {authors
            ? authors.reduce((str, author, index, arr) => {
                return index < arr.length - 1 ? (str = author + ', ' + str) : (str = author);
              }, '')
            : ''}
        </div>
        <p className="book-card__category">{categories ? categories[0] : ' '}</p>
      </div>
    </div>
  );
}
