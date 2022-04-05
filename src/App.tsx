import React from 'react';
import styled from 'styled-components';
import AppRouter from './components/AppRouter';

import Header from './components/Header';

const AppWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrap>
      <Header />
      <AppRouter />
    </AppWrap>
  );
}

export default App;
