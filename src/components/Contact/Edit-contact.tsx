import React, { useState } from 'react';
import { IContact } from '../../types/Contact';
import styled from 'styled-components';
import Button from '../Button';
import Flex from '../Flex';

const StyledInput = styled.input`
  flex: 0 1 auto;
  width: 45%;
  padding: 2px;
  font-size: 18px;
`;

interface IEditContactProps {
  data: IContact;
  cancel: () => void;
  edit: (data: IContact) => void;
}

function EditContact({ data, cancel, edit }: IEditContactProps) {
  const [newData, setNewData] = useState(data);

  return (
    <>
      <Flex margin={'0 0 10px 0'} justify={'space-around'}>
        <StyledInput
          type='text'
          value={newData.firstName}
          onChange={(e) =>
            setNewData((data) => ({ ...data, firstName: e.target.value }))
          }
        />
        <StyledInput
          type='text'
          value={newData.lastName}
          onChange={(e) =>
            setNewData((data) => ({ ...data, lastName: e.target.value }))
          }
        />
      </Flex>

      <Flex align={'center'} justify={'center'} margin={'0 0 20px 0'}>
        <StyledInput
          type='tel'
          value={newData.tel}
          onChange={(e) =>
            setNewData((data) => ({ ...data, tel: e.target.value }))
          }
        />
      </Flex>

      <Flex justify='space-around'>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={() => edit(newData)}>Save</Button>
      </Flex>
    </>
  );
}

export default EditContact;
