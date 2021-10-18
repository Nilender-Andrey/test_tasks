import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteImage, setDrag } from '../../state/ImageState';
import { RootState } from '../../state/store';
import fileHandling from '../../utils/fileHandling/fileHandling';

import Main from './Main';

export default function MainСontainer() {
  const imagesData = useSelector(
    (state: RootState) => state.imagesReducer.galleryImages,
  );
  const drag = useSelector((state: RootState) => state.imagesReducer.drag);
  const dispatch = useDispatch();

  function dragStartHandler(e: React.DragEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setDrag(true));
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();

    const target = e.target as HTMLElement;

    if (target.className === 'card') return;
    dispatch(setDrag(false));
  }

  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    const files = [...e.dataTransfer.files];

    files.forEach((file) => fileHandling(file, dispatch));
    dispatch(setDrag(false));
  }

  function cardDeleteHandler(id:number) {
    dispatch(deleteImage(id));
  }

  const mainDate = {
    imagesData,
    drag,
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    cardDeleteHandler,
  };

  return <Main mainDate={mainDate} />;
}
