import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { ProductsAction, ProductType } from '../types';
import ProductFooter from './ProductFooter';
import Product from './Product';

type ProductCardProps = {
  product: ProductType;
  dispatch: React.Dispatch<ProductsAction>;
};

const ProductCardStyle = styled.li`
  position: relative;
  z-index: 3;
  width: 320px;
  height: 509px;
`;

const ProductCard: FC<ProductCardProps> = ({ product, dispatch }) => {
  const { id, isStock, selected } = product;
  const [hover, setHover] = useState(false);

  const clickHandler = () => {
    if (isStock) dispatch({ type: 'selected', payload: id });
    setHover(false);
  };

  const onMouseLeaveHandler = () => {
    if (selected) {
      setHover(false);
    }
  };

  const onMouseEnterHandler = () => {
    if (selected) {
      setHover(true);
    }
  };

  const productProps = {
    onMouseLeaveHandler,
    onMouseEnterHandler,
    clickHandler,
    product,
    hover,
  };

  return (
    <ProductCardStyle>
      <Product productProps={productProps} />
      <ProductFooter product={product} clickHandler={clickHandler} />
    </ProductCardStyle>
  );
};

export default ProductCard;
