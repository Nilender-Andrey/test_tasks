import { Dispatch } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { addImageUrl, writeImageUrl } from '../../state/ImageState';

export default function addImageFile(file: File, dispatch: Dispatch) {
  const img = new Image();

  img.src = window.URL.createObjectURL(file);

  img.onload = () => {
    dispatch(writeImageUrl(img.src));
    dispatch(
      addImageUrl({ id: uuidv4(), width: img.width, height: img.height }),
    );
  };
}
