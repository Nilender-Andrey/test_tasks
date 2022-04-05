import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../../types/Contact';

interface IContactsState {
  contacts: IContact[];
}

const initialState: IContactsState = {
  contacts: [
    { id: '1', firstName: 'Иван', lastName: 'Иванов' },
    { id: '2', firstName: 'Петр', lastName: 'Петров' },
    { id: '3', firstName: 'Василий', lastName: 'Сидоров' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    removeContact(state, action: PayloadAction<string>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
});

export default contactsSlice.reducer;
