import React, { useState } from 'react';
import placeholder from '../../img/Spinner.svg';

type CardPropsType = {
  image: { id: string; url: string; width: number; height: number };
  cardDeleteHandler: (id: string) => void;
  focusOnImageHandler: (url: string) => void;
};

export default function Card({
  image,

  cardDeleteHandler,
  focusOnImageHandler,
}: CardPropsType) {
  const [load, setLoad] = useState(false);
  const img = new Image();

  img.src = image.url;
  img.onload = () => {
    setLoad(true);
  };

  return (
    <div
      className="card"
      key={image.id}
      style={{ flexGrow: +`${image.width / image.height}` }}
    >
      <button
        className="card-btn"
        type="button"
        onClick={() => focusOnImageHandler(image.url)}
      >
        <img
          className="card-btn__img"
          src={load ? image.url : undefined}
          alt=""
          width={image.width}
          height={image.height}
          style={
          load
            ? { background: 'none' }
            : { background: `url(${placeholder}) no-repeat center` }
        }
        />
      </button>

      <div className="card__wrap-btn">
        <button
          type="button"
          className="card__wrap-btn_delete"
          onClick={() => cardDeleteHandler(image.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}
