import React, { useState } from 'react';
import styled from 'styled-components';
import { IContact } from '../../types/Contact';
import Spinner from '../Spinner';
import EditContact from './Edit-contact';

import ShowContact from './Show-contact';

interface IContactProps {
  data: IContact;
  event: {
    deleteContact: (idItem: string) => Promise<void>;
    editContact: (data: IContact) => Promise<void>;
  };
}

const StyledContact = styled.li`
  position: relative;
  padding: 10px;
  max-width: 300px;

  background-color: #1565c0;

  color: white;
  font-size: 20px;
`;

function Contact({ data, event }: IContactProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const { deleteContact, editContact } = event;

  const cancel = () => {
    setIsEdited(false);
  };

  const edit = async (data: IContact) => {
    setIsLoading(true);
    await editContact(data);
    setIsEdited(false);
    setIsLoading(false);
  };

  const remove = async () => {
    setIsLoading(true);
    await deleteContact(data.id);
    setIsLoading(false);
  };

  const spinner = isLoading ? <Spinner /> : null;

  return (
    <StyledContact>
      {spinner}
      {isEdited ? (
        <EditContact data={data} cancel={cancel} edit={edit} />
      ) : (
        <ShowContact data={data} setIsEdited={setIsEdited} remove={remove} />
      )}
    </StyledContact>
  );
}

export default Contact;
