import React, { useState } from 'react';
import styled from 'styled-components';
import { contactsSlice } from '../../store/reducers/contacts/contacts-slice';
import {
  addContacts,
  getContacts,
} from '../../store/reducers/contacts/fetch-contacts';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { IContact } from '../../types/Contact';
import Button from '../UI/Button';
import Flex from '../UI/Flex';
import AddContact from './Add-contact';

const StyledСontactsMenu = styled.li`
  position: relative;
  padding: 10px;
  max-width: 300px;

  background-color: #1565c0;

  color: white;
  font-size: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 18px;
  &::placeholder {
    font-size: 16px;
  }
`;

function СontactsMenu() {
  const dispatch = useAppDispatch();
  const [adding, setAdding] = useState(false);
  const { editSearch } = contactsSlice.actions;
  const { search } = useAppSelector((state) => state.contactsReducer);
  const {
    user: { id },
  } = useAppSelector((state) => state.authorizationReducer);

  const addContact = async (data: IContact) => {
    await dispatch(addContacts({ ...data, belongId: id }));
    await dispatch(getContacts(id));
  };

  return adding ? (
    <AddContact addContact={addContact} setAdding={setAdding} />
  ) : (
    <StyledСontactsMenu>
      <Flex direction={'column'}>
        <SearchInput
          type='text'
          value={search}
          placeholder='Search...'
          onChange={(e) => dispatch(editSearch(e.target.value))}
        />
        <Button onClick={() => setAdding(true)}>Add new contact</Button>
      </Flex>
    </StyledСontactsMenu>
  );
}

export default СontactsMenu;
