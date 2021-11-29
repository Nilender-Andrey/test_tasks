import { createSlice } from '@reduxjs/toolkit';

export interface BookType {
  id: string;
  volumeInfo: {
    title: string;
    categories: string[];
    authors: string[];
    imageLinks: { thumbnail: string };
  };
}

interface BooksState {
  foundQuantity: number;
  books: BookType[];
}

const initialState: BooksState = {
  foundQuantity: 0,
  books: [],
};

const booksState = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBooks(state, data) {
      state.books = data.payload;
    },
    changeFoundQuantity(state, data) {
      state.foundQuantity = data.payload;
    },
  },
});

export default booksState.reducer;

export const { addBooks, changeFoundQuantity } = booksState.actions;
