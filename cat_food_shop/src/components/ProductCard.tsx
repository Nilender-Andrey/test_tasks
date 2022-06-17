import React from 'react';
import styled from 'styled-components/macro';
import ProductWeight from './ProductWeight';

import background from '../assets/back.png';
import catImg from '../assets/cat.png';

const ProductCardStyle = styled.li`
  position: relative;
  z-index: 3;

  width: 320px;
  height: 509px;
`;

const ProductImg = styled.img`
  position: absolute;
  bottom: 4px;
  left: 4px;

  width: 98%;

  border-radius: 12px;
`;

const ProductStyle = styled.div`
  position: relative;

  padding: 21px 0 0 50px;
  margin-bottom: 13px;

  height: 480px;
  background: url(${background}) center no-repeat;
`;

const ProductTitle = styled.p`
  font-size: 48px;
  font-weight: 700;

  letter-spacing: 1px;
  color: #000000;
`;

const ProductTagline = styled.p`
  margin-bottom: 4px;

  font-size: 16px;

  font-weight: 400;
  color: #666666;
`;

const ProductName = styled(ProductTitle)`
  margin-bottom: 14px;

  font-size: 24px;
`;

const ProductInfo = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
`;

const ProductMotivation = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  text-align: center;
`;

const ProductCard = () => {
  return (
    <ProductCardStyle>
      <ProductStyle>
        <ProductTagline>Сказочное заморское яство</ProductTagline>
        <ProductTitle>Нямушка</ProductTitle>
        <ProductName>с фуа-гра</ProductName>
        <ProductInfo>10 порций</ProductInfo>
        <ProductInfo>мышь в подарок</ProductInfo>
        <ProductInfo>заказчик доволен</ProductInfo>

        <ProductImg src={catImg}></ProductImg>
        <ProductWeight weight={'0,5'} />
      </ProductStyle>

      <ProductMotivation>Чего сидишь? Порадуй котэ, купи.</ProductMotivation>
    </ProductCardStyle>
  );
};

export default ProductCard;
