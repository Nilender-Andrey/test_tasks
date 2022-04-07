import React from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../../components/Error-boundary';
import ContactsList from '../../components/Contact/Contacts-list';

import { StyledPage } from '../style';

const StyledContactsPage = styled(StyledPage)`
  align-items: flex-start;
`;

function ContactsPage() {
  return (
    <ErrorBoundary>
      <StyledContactsPage>
        <ContactsList />
      </StyledContactsPage>
    </ErrorBoundary>
  );
}

export default ContactsPage;
