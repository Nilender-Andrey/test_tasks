import React, { FC, useReducer } from 'react';
import styled from 'styled-components/macro';
import { productReducer } from '../reducers';
import { ProductType } from '../types';
import ProductCard from './ProductCard';

const CardsWrapperStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;

  width: 100%;

  list-style: none;
`;

type CardsWrapperProps = {
  products: ProductType[];
};

const CardsWrapper: FC<CardsWrapperProps> = ({ products }) => {
  const [state, dispatch] = useReducer(productReducer, { products });

  return (
    <CardsWrapperStyle>
      {state.products.map((product) => (
        <ProductCard product={product} key={product.id} dispatch={dispatch} />
      ))}
    </CardsWrapperStyle>
  );
};

export default CardsWrapper;
