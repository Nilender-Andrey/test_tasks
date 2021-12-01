import { createSlice } from '@reduxjs/toolkit';
import { fetchAllBooks, fetchBook } from '../api/api';

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
  startIndex: number;
  foundQuantity: number;
  books: BookType[];
  isLoading: boolean;
  isLoadingOne: boolean;
  error: string;

  search: string;
  newSearch: string;
  category: string;
  sorting: string;

  idBook: string;
  book: BookType;
}

const bookStart = {
  id: '',
  volumeInfo: {
    title: '',
    categories: [],
    authors: [],
    imageLinks: { thumbnail: '' },
  },
};

const initialState: BooksState = {
  startIndex: 0,
  foundQuantity: 0,
  books: [],
  isLoading: false,
  isLoadingOne: false,
  error: '',
  search: '',
  newSearch: '',
  category: '',
  sorting: 'relevance',
  idBook: '',
  book: bookStart,
};

const booksState = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addSearch(state) {
      state.search = state.newSearch;
      state.foundQuantity = 0;
      state.startIndex = 0;
      state.idBook = '';
      state.book = bookStart;
    },
    changeIsLoading(state, data) {
      state.isLoading = data.payload;
    },
    changeNewSearch(state, data) {
      state.newSearch = data.payload;
    },
    changeCategory(state, data) {
      state.category = data.payload;
    },
    changeSorting(state, data) {
      state.sorting = data.payload;
    },
    addIdBook(state, data) {
      state.idBook = data.payload;
    },
    removeIdBook(state) {
      state.idBook = '';
      state.book = bookStart;
    },
  },
  extraReducers: {
    [fetchAllBooks.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAllBooks.fulfilled.type]: (state, data) => {
      state.isLoading = false;
      state.error = '';
      if (state.startIndex === 0) {
        state.books = data.payload.books;
        state.foundQuantity = data.payload.foundQuantity;
        state.startIndex = 30;
      } else {
        state.books = [...state.books, ...data.payload.books];
        state.startIndex = state.startIndex + 30;
      }
    },
    [fetchAllBooks.rejected.type]: (state, data) => {
      state.isLoading = false;
      state.error = data.payload;
    },

    [fetchBook.pending.type]: (state) => {
      state.isLoadingOne = true;
    },
    [fetchBook.fulfilled.type]: (state, data) => {
      state.isLoadingOne = false;
      state.error = '';

      state.book = data.payload;
    },
    [fetchBook.rejected.type]: (state, data) => {
      state.isLoadingOne = false;
      state.error = data.payload;
    },
  },
});

export default booksState.reducer;

export const {
  changeIsLoading,
  addSearch,
  changeNewSearch,
  changeCategory,
  changeSorting,
  addIdBook,
  removeIdBook,
} = booksState.actions;
