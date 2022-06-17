import React, { FC } from 'react';
import Text from './Text';
import styled from 'styled-components/macro';
import { ProductType } from '../types';

const ProductButton = styled.button`
  height: 16px;
  color: #1698d9;

  background: none;
  border: none;
  border-bottom: 1px dashed #1698d9;

  cursor: pointer;
`;

type ProductFooterProps = {
  product: ProductType;
  clickHandler: () => void;
};

const ProductFooter: FC<ProductFooterProps> = ({ product, clickHandler }) => {
  const { name, selected, about, isStock } = product;

  let productFooter = selected ? (
    <Text fs={'13px'} color={'#fff'} ta={'center'}>
      {about}
    </Text>
  ) : (
    <Text fs={'13px'} color={'#fff'} ta={'center'}>
      Чего сидишь? Порадуй котэ,{' '}
      <ProductButton onClick={clickHandler}>купи</ProductButton>
      <span style={{ color: '#1698d9' }}>.</span>
    </Text>
  );

  productFooter = isStock ? (
    productFooter
  ) : (
    <Text fs={'13px'} color={'#FFFF66'} ta={'center'}>
      Печалька, {name} закончился.
    </Text>
  );
  return productFooter;
};

export default ProductFooter;
