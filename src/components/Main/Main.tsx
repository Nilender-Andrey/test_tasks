import React from 'react';
import Card from '../Card/Card';
import ImageFocus from '../ImageFocus/ImageFocus';

type MainPropsType = {
  mainDate: {
    galleryImages: {
      id: string;
      url: string;
      width: number;
      height: number;
    }[];
    drag: boolean;
    focusImage: string;
    dragStartHandler: (e: React.DragEvent<HTMLDivElement>) => void;
    dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void;
    onDropHandler: (e: React.DragEvent<HTMLDivElement>) => void;
    cardDeleteHandler: (id: string) => void;
    focusOnImageHandler: (url: string) => void;
  };
};

export default function Main({ mainDate }: MainPropsType) {
  const MAX_WIDTH = 480;
  const widthWin = window.innerWidth;
  const {
    galleryImages,
    drag,
    focusImage,
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    cardDeleteHandler,
    focusOnImageHandler,
  } = mainDate;

  return (
    <main
      className={drag ? 'main drop-area' : 'main'}
      onDragStart={dragStartHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragStartHandler}
      onDrop={onDropHandler}
    >
      { focusImage && widthWin > MAX_WIDTH && <ImageFocus focusImage={focusImage} focusOnImageHandler={focusOnImageHandler} />}
      {galleryImages.map((image) => (
        <Card
          image={image}
          cardDeleteHandler={cardDeleteHandler}
          focusOnImageHandler={focusOnImageHandler}
          key={image.id}
        />
      ))}
      <div className="card" />
    </main>
  );
}
