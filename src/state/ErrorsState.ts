/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface ErrorsState {
  errorKey:number;
  errorText:string;

}
const initialState:ErrorsState = {
  errorKey: 0,
  errorText: '',

};

const errorsState = createSlice({
  name: 'errors',
  initialState,

  reducers: {
    changeTheErrorText(state, data) {
      switch (data.payload) {
        case 'ERROR_0':
          state.errorText = '';
          break;
        case 'ERROR_1':
          state.errorText = 'Файл не поддерживается или поврежден!';
          break;
        case 'ERROR_2':
          state.errorText = 'Не правильный или поврежденный URL адрес!';
          break;

        default:
          state.errorText = '';
          break;
      }
    },
  },
});

export default errorsState.reducer;

export const { changeTheErrorText } = errorsState.actions;
