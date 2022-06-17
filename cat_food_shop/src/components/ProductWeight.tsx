import React, { FC } from 'react';
import styled from 'styled-components/macro';

type ProductWeightProps = {
  weight: string;
};

const ProductWeightStyle = styled.div`
  position: absolute;
  bottom: 16px;
  right: 17px;

  padding: 20px 0;

  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: #1698d9;

  .weight,
  .unit {
    font-weight: 400;
    font-size: 42px;
    line-height: 22px;
    text-align: center;
  }

  .unit {
    margin-top: 7px;
    font-size: 21px;
  }
`;

const ProductWeight: FC<ProductWeightProps> = ({ weight }) => {
  return (
    <ProductWeightStyle>
      <p className='weight'>{weight}</p>
      <p className='unit'>кг</p>
    </ProductWeightStyle>
  );
};

export default ProductWeight;
