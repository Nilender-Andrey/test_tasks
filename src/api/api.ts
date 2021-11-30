import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

//const key = 'AIzaSyAi8dWSOVAgbii0WrB4XtJDY0Qq4x7g3cc';
const maxResults = 30; // 10-40
const printType = 'books'; //all, books, magazines
const countryCode = 'RU';

export async function fetchBooks(
  search: string,
  category: string,
  sorting: string,
  startIndex: number,
) {
  const editedRequest = search.replaceAll(' ', '+');

  let url = 'https://www.googleapis.com/books/v1/volumes?';
  url += `q=${editedRequest}`;
  url += `+subject:"${category}"`;
  url += `&orderBy=${sorting}`;
  url += `&maxResults=${maxResults}`;
  url += `&startIndex=${startIndex}`;
  url += `&printType=${printType}`;
  //url += `&country=${countryCode}`;
  //url += `&key=${key}`;

  try {
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return {
      books: data.items ? data.items : [],
      number: data.totalItems === 0 ? -1 : data.totalItems,
    };
  } catch (error) {
    console.log(error);
  }
}

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
    console.log(response.data.volumeInfo);
    return response.data.volumeInfo;
  } catch (error) {
    return thunkApi.rejectWithValue('Ошибка');
  }
});
