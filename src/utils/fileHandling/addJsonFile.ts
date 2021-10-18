import { Dispatch } from '@reduxjs/toolkit';
import { addId } from '../../helpers/addId';
import { addListImage } from '../../state/ImageState';

export default function addJsonFile(file: File, dispatch: Dispatch<any>) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (e) => {
    if (e.target) {
      const text = e.target.result;

      if (typeof text === 'string') {
        const imageData = JSON.parse(text);

        dispatch(addListImage(addId(imageData.galleryImages)));
      }
    }
  };
}
