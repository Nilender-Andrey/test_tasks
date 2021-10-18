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
  galleryImages: [
    {
      id: 1,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550746.jpg',
      width: 640,
      height: 426,
    },
    {
      id: 2,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964007.jpg',
      width: 1920,
      height: 1200,
    },
    {
      id: 3,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550739.jpg',
      width: 640,
      height: 426,
    },
    {
      id: 4,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964009.jpg',
      width: 436,
      height: 650,
    },
    {
      id: 5,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550740.jpg',
      width: 600,
      height: 400,
    },
    {
      id: 6,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964008.jpg',
      width: 509,
      height: 339,
    },
    {
      id: 7,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964011.jpg',
      width: 900,
      height: 450,
    },
    {
      id: 8,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550755.jpg',
      width: 480,
      height: 640,
    },
    {
      id: 9,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964013.jpg',
      width: 472,
      height: 640,
    },
    {
      id: 10,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550745.jpg',
      width: 640,
      height: 425,
    },
    {
      id: 11,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964014.jpg',
      width: 240,
      height: 320,
    },
    {
      id: 12,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964016.jpg',
      width: 540,
      height: 337,
    },
    {
      id: 13,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964020.jpg',
      width: 1600,
      height: 1000,
    },
    {
      id: 14,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964010.jpg',
      width: 1506,
      height: 575,
    },
    {
      id: 15,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/493550754.jpg',
      width: 1280,
      height: 1276,
    },
    {
      id: 16,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964021.jpg',
      width: 1280,
      height: 800,
    },
    {
      id: 17,
      url: 'https://don16obqbay2c.cloudfront.net/frontend-test-task/images/448964012.jpg',
      width: 787,
      height: 787,
    },
  ],
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
