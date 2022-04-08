import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 24px;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-right: 20px;
  }
`;

const Span = styled.span`
  color: #1565c0;
`;

function Logo() {
  return (
    <StyledLogo>
      Personal <Span>Account</Span>
    </StyledLogo>
  );
}

export default Logo;
