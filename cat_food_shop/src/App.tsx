import React from 'react';
import styled from 'styled-components/macro';
import CardsWrapper from './components/CardsWrapper';

const AppStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  height: 680px;
  width: 1280px;

  color: white;
`;

const MainTitle = styled.h1`
  margin-bottom: 24px;

  font-weight: 400;
  font-family: 'Exo 2.0';
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  text-shadow: 0px 1px 1px #000000;
`;

function App() {
  return (
    <AppStyle>
      <MainTitle>Ты сегодня покормил кота?</MainTitle>
      <CardsWrapper />
    </AppStyle>
  );
}

export default App;
