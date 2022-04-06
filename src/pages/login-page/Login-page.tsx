import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../components/Error_boundary';
import Form from '../../components/Form';

import { StyledPage } from '../style';

const StyledLoginPage = styled(StyledPage)``;

function LoginPage() {
  return (
    <ErrorBoundary>
      <StyledLoginPage>
        <Form />
      </StyledLoginPage>
    </ErrorBoundary>
  );
}

export default LoginPage;
