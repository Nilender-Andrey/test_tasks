import React from 'react';
import styled from 'styled-components';
import spinner from '../assets/spinner.svg';

const StyledSpinner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 9999;

  background-color: #d3d3d391;

  text-align: center;
`;

const StyledSpinnerImg = styled.img`
  height: 100%;
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
