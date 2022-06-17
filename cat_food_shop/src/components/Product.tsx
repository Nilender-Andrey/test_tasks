import React, { FC } from 'react';
import styled from 'styled-components/macro';
import block from '../assets/block.svg';
import { ProductType } from '../types';
import ProductWeight from './ProductWeight';
import Text from './Text';
import ProductBackground from './ProductBackground';
import catImg from '../assets/cat.png';

type ProductStyleProps = {
  block: boolean;
};

const ProductStyle = styled.div<ProductStyleProps>`
  position: relative;
  padding: 21px 0 0 50px;
  margin-bottom: 13px;
  height: 480px;

  cursor: pointer;
  user-select: none;

  @media (max-width: 360px) {
    width: 310px;
    margin: 0 auto;
  }

  &:before {
    display: ${({ block }) => (block ? 'none' : 'block')};

    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: url(${block}) center no-repeat;
    opacity: 0.5;
  }
`;

const ProductImg = styled.img`
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 98%;
  border-radius: 7px;

  @media (max-width: 360px) {
    bottom: 33px;
    left: 8px;
  }
`;

type ProductProps = {
  productProps: {
    onMouseLeaveHandler: () => void;
    onMouseEnterHandler: () => void;
    clickHandler: () => void;
    product: ProductType;
    hover: boolean;
  };
};

const Product: FC<ProductProps> = ({ productProps }) => {
  const {
    onMouseLeaveHandler,
    onMouseEnterHandler,
    clickHandler,
    product,
    hover,
  } = productProps;

  const { name, portions, present, weight, isHappy, selected, isStock } =
    product;

  let backgroundColor = selected ? '#D91667' : '#1698D9';
  backgroundColor = isStock ? backgroundColor : '#B3B3B3';

  const headText =
    selected && hover ? (
      <Text fs={'16px'} mb={'5px'} color={'#E62E7A'}>
        Котэ не одобряет?
      </Text>
    ) : (
      <Text fs={'16px'} mb={'5px'}>
        Сказочное заморское яство
      </Text>
    );

  return (
    <ProductStyle
      block={isStock}
      onClick={clickHandler}
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={onMouseEnterHandler}>
      {headText}
      <Text fs={'48px'} fw={700} ls={'1px'} color={'#000'}>
        Нямушка
      </Text>
      <Text fs={'24px'} fw={700} ls={'1px'} color={'#000'} mb={'14px'}>
        {name}
      </Text>
      <Text>{portions} порций</Text>
      <Text>{present} в подарок</Text>
      {isHappy && <Text>заказчик доволен</Text>}
      <ProductBackground color={backgroundColor} />
      <ProductImg src={catImg}></ProductImg>
      <ProductWeight weight={weight} selected={selected} />
    </ProductStyle>
  );
};

export default Product;
