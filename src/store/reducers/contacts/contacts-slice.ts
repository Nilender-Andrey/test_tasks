import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../../types/Contact';
import {
  addContacts,
  deleteContacts,
  getContacts,
  updateContacts,
} from './fetch-contacts';

interface IContactsState {
  contacts: IContact[];
  search: string;

  isLoading: boolean;
  isErrorContact: boolean;
}

const initialState: IContactsState = {
  contacts: [] as IContact[],
  search: '',
  isLoading: false,
  isErrorContact: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    reset(state) {
      state.contacts = [];
    },
    editSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [getContacts.fulfilled.type]: (
      state,
      action: PayloadAction<IContact[]>,
    ) => {
      state.contacts = action.payload;
      state.isLoading = false;
      state.isErrorContact = false;
    },
    [getContacts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getContacts.rejected.type]: (state) => {
      state.isLoading = false;
      state.isErrorContact = true;
    },

    [deleteContacts.fulfilled.type]: (state) => {
      state.isErrorContact = false;
    },
    [deleteContacts.rejected.type]: (state) => {
      state.isErrorContact = true;
    },

    [updateContacts.fulfilled.type]: (state) => {
      state.isErrorContact = false;
    },
    [updateContacts.rejected.type]: (state) => {
      state.isErrorContact = true;
    },

    [addContacts.fulfilled.type]: (state) => {
      state.isErrorContact = false;
    },
    [addContacts.rejected.type]: (state) => {
      state.isErrorContact = true;
    },
  },
});

export default contactsSlice.reducer;
