import { configureStore } from '@reduxjs/toolkit';

import booksStateReducer from './books_state';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    booksReducer: booksStateReducer,
  },
});
