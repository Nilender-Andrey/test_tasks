import React from 'react';
import styled from 'styled-components/macro';
import ProductCard from './ProductCard';

const CardsWrapperStyle = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  list-style: none;
`;

const CardsWrapper = () => {
  return (
    <CardsWrapperStyle>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </CardsWrapperStyle>
  );
};

export default CardsWrapper;
