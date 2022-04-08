import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IContact, IContactDb } from '../../../types/Contact';

const URL = 'http://localhost:3001/contacts';

export const getContacts = createAsyncThunk(
  'get/contacts',
  async (id: string, thunkAPI) => {
    try {
      const response = await axios.get<IContact[]>(URL + `?belongId=${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Server not responding, please try again later',
      );
    }
  },
);

export const deleteContacts = createAsyncThunk(
  'delete/contacts',
  async (id: string, thunkAPI) => {
    try {
      await axios.delete<IContact[]>(URL + `/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Server not responding, please try again later',
      );
    }
  },
);

export const updateContacts = createAsyncThunk(
  'update/contacts',
  async (data: IContact, thunkAPI) => {
    try {
      const response = await axios.patch<IContact[]>(URL + `/${data.id}`, {
        ...data,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Server not responding, please try again later',
      );
    }
  },
);

export const addContacts = createAsyncThunk(
  'add/contacts',
  async (data: IContactDb, thunkAPI) => {
    try {
      const response = await axios.post<IContact[]>(URL, {
        ...data,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Server not responding, please try again later',
      );
    }
  },
);
