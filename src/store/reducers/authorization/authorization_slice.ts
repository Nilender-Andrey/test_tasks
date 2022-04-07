import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../types/User';
import fetchAuthorization from './fetch-authorization';

interface IAuthorizationState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  isErrorAuth: boolean;

  username: string;
  password: string;
  userFound: boolean;
}

const initialState: IAuthorizationState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  isErrorAuth: false,

  username: '',
  password: '',
  userFound: true,
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.user = {} as IUser;
    },
    passwordEntry(state, action: PayloadAction<string>) {
      state.password = action.payload;
      state.userFound = true;
    },
    usernameEntry(state, action: PayloadAction<string>) {
      state.username = action.payload;
      state.userFound = true;
    },
  },
  extraReducers: {
    [fetchAuthorization.fulfilled.type]: (
      state,
      action: PayloadAction<IUser | null>,
    ) => {
      state.isLoading = false;
      state.isErrorAuth = false;

      if (action.payload) {
        state.user = action.payload;
        state.isAuth = true;
        state.userFound = true;

        state.username = '';
        state.password = '';
      } else {
        state.userFound = false;
      }
    },
    [fetchAuthorization.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAuthorization.rejected.type]: (state) => {
      state.isLoading = false;
      state.isErrorAuth = true;
    },
  },
});

export default authorizationSlice.reducer;
