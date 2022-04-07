import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  addContacts,
  deleteContacts,
  getContacts,
  updateContacts,
} from '../../store/reducers/contacts/fetch-contacts';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { IContact } from '../../types/Contact';
import AddContact from './Add-contact';
import Contact from './Contact';

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
  const { contacts } = useAppSelector((state) => state.contactsReducer);

  useEffect(() => {
    dispatch(getContacts(id));
  }, [id]);

  const deleteContact = async (idItem: string) => {
    await dispatch(deleteContacts(idItem));
    await dispatch(getContacts(id));
  };

  const editContact = async (data: IContact) => {
    await dispatch(updateContacts(data));
    await dispatch(getContacts(id));
  };

  const addContact = async (data: IContact) => {
    await dispatch(addContacts({ ...data, belongId: id }));
    await dispatch(getContacts(id));
  };

  const event = {
    deleteContact,
    editContact,
  };

  const content = contacts.map((contact) => (
    <Contact data={contact} event={event} key={contact.id} />
  ));

  return (
    <StyledContactsList>
      <AddContact addContact={addContact} />
      {content}
    </StyledContactsList>
  );
}

export default ContactsList;
