import React from 'react';
import styled from 'styled-components';
import AppRouter from './components/AppRouter';

import Header from './components/Header';
import ErrorPage from './pages/error-page/Error-page';
import { useAppSelector } from './store/store';

const AppWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  const { isErrorContact } = useAppSelector((state) => state.contactsReducer);
  const { isErrorAuth } = useAppSelector((state) => state.authorizationReducer);
  const pages = isErrorContact || isErrorAuth ? <ErrorPage /> : <AppRouter />;

  return (
    <AppWrap>
      <Header />
      {pages}
    </AppWrap>
  );
}

export default App;
