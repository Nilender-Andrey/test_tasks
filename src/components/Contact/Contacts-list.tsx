import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { sortedAndSearchContacts } from '../../helpers/helpers';
import {
  deleteContacts,
  getContacts,
  updateContacts,
} from '../../store/reducers/contacts/fetch-contacts';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { IContact } from '../../types/Contact';

import Contact from './Contact';
import СontactsMenu from './Сontacts-menu';

const StyledContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
  list-style: none;
`;

function ContactsList() {
  const dispatch = useAppDispatch();
  const {
    user: { id },
  } = useAppSelector((state) => state.authorizationReducer);
  const { contacts, search } = useAppSelector((state) => state.contactsReducer);

  useEffect(() => {
    dispatch(getContacts(id));
  }, [dispatch, id]);

  const deleteContact = async (idItem: string) => {
    await dispatch(deleteContacts(idItem));
    await dispatch(getContacts(id));
  };

  const editContact = async (data: IContact) => {
    await dispatch(updateContacts(data));
    await dispatch(getContacts(id));
  };

  const event = {
    deleteContact,
    editContact,
  };

  const content = useMemo(
    () =>
      sortedAndSearchContacts(contacts, search).map((contact) => (
        <Contact data={contact} event={event} key={contact.id} />
      )),
    [contacts, search],
  );

  return (
    <StyledContactsList>
      <СontactsMenu />
      {content}
    </StyledContactsList>
  );
}

export default ContactsList;
