import React from 'react';
import styled from 'styled-components';

const StyledErrorIndicator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
`;

const StyledErrorTitle = styled.p`
  font-size: 45px;
`;

function ErrorIndicator() {
  return (
    <StyledErrorIndicator>
      <StyledErrorTitle>Sorry!</StyledErrorTitle>

      <p>Something went wrong</p>
      <p>(we are already fixing this bug)</p>
    </StyledErrorIndicator>
  );
}

export default ErrorIndicator;
