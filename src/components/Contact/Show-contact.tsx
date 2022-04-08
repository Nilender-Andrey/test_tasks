import React from 'react';
import styled from 'styled-components';
import { IContact } from '../../types/Contact';
import Button from '../UI/Button';
import Flex from '../UI/Flex';

import phoneSvg from '../../assets/phone.svg';

const StyledContactLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: black;
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

interface IShowContactProps {
  data: IContact;
  remove: () => void;
  setIsEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowContact({ data, setIsEdited, remove }: IShowContactProps) {
  const { firstName, lastName, tel } = data;

  return (
    <>
      <Flex margin={'0 0 10px 0'} justify={'center'}>
        {`${firstName} ${lastName}`}
      </Flex>

      <Flex align={'center'} justify={'center'} margin={'0 0 20px 0'}>
        <StyledContactLink href={`tel:${tel}`}>
          <StyledImg src={phoneSvg} alt='phone' />
        </StyledContactLink>
        <span>Tel: {tel}</span>
      </Flex>

      <Flex justify='space-around'>
        <Button onClick={() => setIsEdited(true)}>Edit</Button>
        <Button onClick={remove}>Delete</Button>
      </Flex>
    </>
  );
}

export default ShowContact;
