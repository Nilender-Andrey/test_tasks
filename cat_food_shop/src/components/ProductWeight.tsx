import React, { FC } from 'react';
import styled from 'styled-components/macro';
import Text from './Text';

type ProductWeightProps = {
  weight: string;
  selected: boolean;
};

type ProductWeightStyleProps = {
  selected: boolean;
};

const ProductWeightStyle = styled.div<ProductWeightStyleProps>`
  position: absolute;
  bottom: 16px;
  right: 17px;

  padding: 20px 0;

  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? '#D91667' : '#1698d9')};

  @media (max-width: 360px) {
    bottom: 50px;
    right: 20px;
  }
`;

const ProductWeight: FC<ProductWeightProps> = ({ weight, selected }) => {
  return (
    <ProductWeightStyle selected={selected}>
      <Text fs={'42px'} ta={'center'} mb={'7px'} color={'#fff'} lh={'22px'}>
        {weight}
      </Text>
      <Text fs={'21px'} ta={'center'} color={'#fff'} lh={'22px'}>
        кг
      </Text>
    </ProductWeightStyle>
  );
};

export default ProductWeight;
