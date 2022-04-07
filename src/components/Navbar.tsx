import React from 'react';
import { authorizationSlice } from '../store/reducers/authorization/authorization_slice';
import { contactsSlice } from '../store/reducers/contacts/contacts-slice';

import { useAppDispatch, useAppSelector } from '../store/store';
import Avatar from './Avatar';

import Button from './Button';
import Flex from './Flex';

function Navbar() {
  const { isAuth, user } = useAppSelector(
    (state) => state.authorizationReducer,
  );
  const dispatch = useAppDispatch();

  const { logout } = authorizationSlice.actions;
  const { reset } = contactsSlice.actions;

  const logoutHandler = () => {
    dispatch(reset());
    dispatch(logout());
  };

  return (
    <Flex align='center'>
      {isAuth && (
        <>
          <Avatar name={user.userName} />
          <Button onClick={logoutHandler}>Logout</Button>
        </>
      )}
    </Flex>
  );
}

export default Navbar;
