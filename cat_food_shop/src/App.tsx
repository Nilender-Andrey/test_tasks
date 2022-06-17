import React from 'react';
import styled from 'styled-components/macro';
import CardsWrapper from './components/CardsWrapper';
import Title from './components/Title';
import { ProductType } from './types';

const products: ProductType[] = [
  {
    id: 1,
    name: 'с фуа-гра',
    portions: '10',
    present: 'мышь',
    weight: '0,5',
    isHappy: false,
    selected: false,
    isStock: true,
    about: 'Печень утки разварная с артишоками.',
  },
  {
    id: 2,
    name: 'с рыбой',
    portions: '40',
    present: '2 мыши',
    weight: '2',
    isHappy: false,
    selected: false,
    isStock: true,
    about: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  },
  {
    id: 3,
    name: 'с курой',
    portions: '100',
    present: '5 мышей',
    weight: '5',
    isHappy: true,
    selected: false,
    isStock: false,
    about: 'Филе из цыплят с трюфелями в бульоне.',
  },
];

const AppStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  max-width: 1280px;
  width: 100%;

  color: white;
`;

function App() {
  return (
    <AppStyle>
      <Title>Ты сегодня покормил кота?</Title>
      <CardsWrapper products={products} />
    </AppStyle>
  );
}

export default App;
