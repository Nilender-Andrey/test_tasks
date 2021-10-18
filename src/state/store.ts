import { configureStore } from '@reduxjs/toolkit';

import imagesStateReducer from './ImageState';
import errorsStateReducer from './ErrorsState';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    imagesReducer: imagesStateReducer,
    errorsReducer: errorsStateReducer,
  },

});
