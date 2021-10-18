import { Dispatch } from '@reduxjs/toolkit';
import { addImageUrl, writeImageUrl } from '../../state/ImageState';

export default function addImageFile(file: File, dispatch: Dispatch<any>) {
  const img = new Image();

  img.src = window.URL.createObjectURL(file);

  img.onload = () => {
    dispatch(writeImageUrl(img.src));
    dispatch(addImageUrl({ id: Date.now(), width: img.width, height: img.height }));
    // window.URL.revokeObjectURL(img.src);
  };
}
