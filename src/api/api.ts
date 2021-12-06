import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const maxResults = 30; // 10-40
const printType = 'books'; //all, books, magazines
//const countryCode = 'RU';

interface IArg {
  search: string;
  category: string;
  sorting: string;
  startIndex: number;
}

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (arg: IArg, thunkApi) => {
    const { search, category, sorting, startIndex } = arg;

    const editedRequest = search.replaceAll(' ', '+');

    let url = 'https://www.googleapis.com/books/v1/volumes?';
    url += `q=${editedRequest}`;
    url += `+subject:"${category}"`;
    url += `&orderBy=${sorting}`;
    url += `&maxResults=${maxResults}`;
    url += `&startIndex=${startIndex}`;
    url += `&printType=${printType}`;
    //   url += `&key=${key}`;

    try {
      const response = await axios.get(url);

      return {
        books: response.data.items,
        foundQuantity: response.data.totalItems,
      };
    } catch (error) {
      return thunkApi.rejectWithValue('Ошибка');
    }
  },
);

export const fetchBook = createAsyncThunk('books/fetchBook', async (id: string, thunkApi) => {
  let url = `https://www.googleapis.com/books/v1/volumes/${id}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('Ошибка');
  }
});
