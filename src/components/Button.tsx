import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;

  min-width: 80px;
  height: 35px;
  padding: 0 5px;

  font-size: 18px;
  cursor: pointer;

  border: 1px solid white;
  background-color: #1565c0;
  border-radius: 5px;
  color: white;

  transition: all 150ms linear;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #1565c0;
    background-color: white;
    border: 1px solid #1565c0;
  }
  &:active {
    transform: scale(0.97);
  }
`;

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

function Button({ children, onClick, type = 'button' }: IButton) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
