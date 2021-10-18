import React from 'react';
import Card from '../Card/Card';

type MainPropsType = {
  mainDate: {
    imagesData: {
      id: number;
      url: string;
      width: number;
      height: number;
    }[];
    drag: boolean;
    dragStartHandler: (e: React.DragEvent<HTMLDivElement>) => void;
    dragLeaveHandler: (e: React.DragEvent<HTMLDivElement>) => void;
    onDropHandler: (e: React.DragEvent<HTMLDivElement>) => void;
    cardDeleteHandler: (id: number) => void;
  };
};

export default function Main({ mainDate }: MainPropsType) {
  const {
    imagesData,
    drag,
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    cardDeleteHandler,
  } = mainDate;

  return (
    <main
      className={drag ? 'main drop-area' : 'main'}
      onDragStart={dragStartHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={dragStartHandler}
      onDrop={onDropHandler}
    >
      {imagesData.map((image) => (
        <Card
          image={image}
          cardDeleteHandler={cardDeleteHandler}
          key={image.id}
        />
      ))}
      <div className="card" />
    </main>
  );
}
