import React from 'react';
import { BookType } from '../../state/books_state';

import './Book_card.scss';

interface BookCardProps {
  data: BookType;
}

export default function BookCard({ data }: BookCardProps) {
  const { imageLinks, title, categories, authors } = data.volumeInfo;

  return (
    <div className="book-card">
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
            ? authors.map((author) => (
                <p className="book-card__author" key={author}>
                  {author}
                </p>
              ))
            : ''}
        </div>
        <p className="book-card__category">{categories ? categories[0] : ' '}</p>
      </div>
    </div>
  );
}
