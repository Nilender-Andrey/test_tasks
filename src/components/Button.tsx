import React from 'react';
import styled from 'styled-components';
import { ChildrenType } from '../types/Types';

const StyledButton = styled.button`
  position: relative;

  width: 100px;
  height: 50px;

  font-size: 18px;
  cursor: pointer;

  border: 1px solid #1565c0;
  background-color: #1565c0;
  border-radius: 10px;
  color: white;

  transition: all 150ms linear;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #1565c0;
    background-color: white;
  }
  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 40px;
    font-size: 16px;
  }
`;

interface IButton {
  children: ChildrenType;
  onClick?: () => void;
}

function Button({ children, onClick }: IButton) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
