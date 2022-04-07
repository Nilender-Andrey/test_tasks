import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IContact } from '../../types/Contact';
import styled from 'styled-components';
import Button from '../Button';
import Flex from '../Flex';
import Spinner from '../Spinner';

const StyledAddContact = styled.li`
  position: relative;

  padding: 10px;
  max-width: 300px;

  background-color: #1565c0;

  color: white;
  font-size: 20px;
  text-align: center;
`;

const StyledInput = styled.input`
  flex: 0 1 auto;
  padding: 2px;
  width: 45%;
  font-size: 18px;

  &::placeholder {
    font-size: 14px;
  }
`;

interface IAddContactProps {
  addContact: (data: IContact) => Promise<void>;
}

function AddContact({ addContact }: IAddContactProps) {
  const [isLoading, setIsLoading] = useState(false);
  const defaultData = {
    id: uuidv4(),
    firstName: '',
    lastName: '',
    tel: '',
  };

  const [adding, setAdding] = useState(false);
  const [newData, setNewData] = useState<IContact>(defaultData);

  const save = async () => {
    setIsLoading(true);
    await addContact(newData);
    setNewData(defaultData);
    setAdding(false);
    setIsLoading(false);
  };

  const spinner = isLoading ? <Spinner /> : null;

  return adding ? (
    <StyledAddContact>
      {spinner}
      <Flex margin={'0 0 10px 0'} justify={'space-around'}>
        <StyledInput
          type='text'
          value={newData.firstName}
          placeholder='First name'
          onChange={(e) =>
            setNewData((data) => ({ ...data, firstName: e.target.value }))
          }
        />
        <StyledInput
          type='text'
          value={newData.lastName}
          placeholder='Last name'
          onChange={(e) =>
            setNewData((data) => ({ ...data, lastName: e.target.value }))
          }
        />
      </Flex>

      <Flex align={'center'} justify={'center'} margin={'0 0 20px 0'}>
        <StyledInput
          type='tel'
          placeholder='Phone number'
          value={newData.tel}
          onChange={(e) =>
            setNewData((data) => ({ ...data, tel: e.target.value }))
          }
        />
      </Flex>

      <Flex justify='space-around'>
        <Button onClick={() => setAdding(false)}>Cancel</Button>
        <Button onClick={save}>Save</Button>
      </Flex>
    </StyledAddContact>
  ) : (
    <StyledAddContact>
      <Button onClick={() => setAdding(true)}>Add new contact</Button>
    </StyledAddContact>
  );
}

export default AddContact;
