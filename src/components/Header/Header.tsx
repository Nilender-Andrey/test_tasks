import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--header-height);
  padding: 0 10px;
  border-bottom: 3px solid var(--main-color);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
