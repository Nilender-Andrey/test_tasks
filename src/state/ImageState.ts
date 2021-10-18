/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export type ImageType = {
  id: number;
  url: string;
  width: number;
  height: number;
};

interface ImagesState {
  galleryImages: ImageType[];
  newImageUrl: string;
  drag: boolean;
}
const initialState: ImagesState = {
  galleryImages: [],
  newImageUrl: '',
  drag: false,
};

const imagesState = createSlice({
  name: 'images',
  initialState,

  reducers: {
    addImageUrl(state, data) {
      const imageData = {
        id: data.payload.id,
        url: state.newImageUrl,
        width: data.payload.width,
        height: data.payload.height,
      };
      if (imageData.url.length !== 0) {
        state.galleryImages.push(imageData);
        state.newImageUrl = '';
      }
    },

    addListImage(state, data) {
      state.galleryImages = [...state.galleryImages, ...data.payload];
    },
    writeImageUrl(state, data) {
      state.newImageUrl = data.payload;
    },
    setDrag(state, data) {
      state.drag = data.payload;
    },
    deleteImage(state, data) {
      const newGalleryImages = state.galleryImages.filter(
        (item) => item.id !== data.payload,
      );
      // console.log(newGalleryImages);
      state.galleryImages = newGalleryImages;
    },
  },
});

export default imagesState.reducer;

export const {
  writeImageUrl,
  addImageUrl,
  addListImage,
  setDrag,
  deleteImage,
} = imagesState.actions;
