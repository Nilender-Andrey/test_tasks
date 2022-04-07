import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../types/User';

interface IFetchAuthorization {
  username: string;
  password: string;
}

const fetchAuthorization = createAsyncThunk(
  'authorization',
  async ({ username, password }: IFetchAuthorization, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('http://localhost:3001/users');
      const user = response.data.find(
        (user: IUser) =>
          user.userName === username && user.password === password,
      );

      if (user) return user;
      else return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Server not responding, please try again later',
      );
    }
  },
);

export default fetchAuthorization;
