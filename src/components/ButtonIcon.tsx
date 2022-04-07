import React from 'react';
import styled from 'styled-components';

const StyledButtonIcon = styled.button`
  position: relative;

  width: 40px;
  height: 40px;

  border: 1px solid #1565c0;
  cursor: pointer;
  transition: all 150ms linear;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const StyledImg = styled.img``;

interface IButton {
  path: string;
  onClick?: () => void;
}

function ButtonIcon({ path, onClick }: IButton) {
  return (
    <StyledButtonIcon onClick={onClick}>
      <StyledImg src={path} alt='icon' />
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
