import React, { useEffect, useState } from 'react';
import arrayToString from '../../helpers/array_to_string';
import { BookType } from '../../state/books_state';
import Loading from '../UI/Loading/Loading';
import './Book_page.scss';

interface BookPageProps {
  book: BookType;
  handlerBtnBack: () => void;
  isLoadingOne: boolean;
}

export default function BookPage({ book, handlerBtnBack, isLoadingOne }: BookPageProps) {
  const { title, categories, authors, imageLinks } = book.volumeInfo;
  const [moment, setMoment] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMoment(true);
    }, 600);
  }, []);

  const theСlosing = () => {
    setMoment(false);
    setTimeout(() => {
      handlerBtnBack();
    }, 600);
  };

  return (
    <>
      {isLoadingOne && <Loading />}
      <div className={`book-page ${moment && 'animation'}`}>
        <button className="book-card__button" onClick={theСlosing}>
          Back
        </button>
        <div className="book-page__img-wrap">
          {imageLinks && imageLinks.thumbnail ? (
            <img className="book-page__img-wrap_img" src={imageLinks.thumbnail} alt="book cover" />
          ) : null}
        </div>

        <div className="info-wrap">
          <h3 className="info__title">{title}</h3>
          <div className="info__authors">{authors ? arrayToString(authors) : null}</div>
          <p className="info__category">{categories ? arrayToString(categories) : null}</p>
        </div>
      </div>
    </>
  );
}
