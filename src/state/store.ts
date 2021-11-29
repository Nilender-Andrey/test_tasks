import { configureStore } from '@reduxjs/toolkit';

import booksStateReducer from './books_state';
import optionsStateReducer from './options_state';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    booksReducer: booksStateReducer,
    optionsReducer: optionsStateReducer,
  },
});
