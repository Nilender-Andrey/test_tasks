import React, { useState } from 'react';

type CardPropsType = {
  image: { id: number; url: string; width: number; height: number };
  cardDeleteHandler: (id: number) => void;
};

export default function Card({ image, cardDeleteHandler }: CardPropsType) {
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

      <img
        className="card__img"
        src={load ? image.url : undefined}
        alt=""
        width={image.width}
        height={image.height}
      />

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
