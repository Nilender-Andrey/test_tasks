import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../types/User';
import fetchAuthorization from './fetch-authorization';

interface IAuthorizationState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: IAuthorizationState = {
  isAuth: true,
  user: { userName: 'Vasia' } as IUser,
  isLoading: false,
  error: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.user = {} as IUser;
    },
  },
  extraReducers: {
    [fetchAuthorization.fulfilled.type]: (
      state,
      action: PayloadAction<IUser | string>,
    ) => {
      state.isLoading = false;
      state.error = '';

      console.log(action);
      if (typeof action.payload === 'string') {
      } else {
      }
    },
    [fetchAuthorization.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchAuthorization.rejected.type]: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default contactsSlice.reducer;
