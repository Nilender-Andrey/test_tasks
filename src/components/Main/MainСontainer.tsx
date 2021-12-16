import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFocusImage, deleteImage, setDrag } from '../../state/ImageState';
import { RootState } from '../../state/store';
import fileHandling from '../../utils/fileHandling/fileHandling';

import Main from './Main';

export default function MainСontainer() {
  const { drag, galleryImages, focusImage } = useSelector(
    (state: RootState) => state.imagesReducer,
  );
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

  function cardDeleteHandler(id: string) {
    dispatch(deleteImage(id));
  }

  const focusOnImageHandler = (id: string) => {
    dispatch(changeFocusImage(id));
  };

  const mainDate = {
    galleryImages,
    drag,
    focusImage,
    dragStartHandler,
    dragLeaveHandler,
    onDropHandler,
    cardDeleteHandler,
    focusOnImageHandler,
  };

  return <Main mainDate={mainDate} />;
}
