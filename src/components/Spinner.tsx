import React from 'react';
import styled from 'styled-components';
import spinner from '../assets/spinner.svg';

const StyledSpinner = styled.div`
  height: 100%;

  text-align: center;
`;

const StyledSpinnerImg = styled.img`
  width: 100%;
`;

function Spinner() {
  return (
    <StyledSpinner>
      <StyledSpinnerImg src={spinner} alt='' />
    </StyledSpinner>
  );
}

export default Spinner;
