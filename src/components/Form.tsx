import React, { useState } from 'react';
import styled from 'styled-components';
import { authorizationSlice } from '../store/reducers/authorization/authorization_slice';
import fetchAuthorization from '../store/reducers/authorization/fetch-authorization';
import { useAppDispatch, useAppSelector } from '../store/store';
import Button from './Button';
import ErrorIndicator from './Error-indicator';
import Input from './Input';
import Spinner from './Spinner';

const StyledForm = styled.form`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 220px;
  width: 300px;
  padding: 10px;

  border: 1px solid black;
`;

const StyledError = styled.p`
  width: 100%;
  height: 18px;
  margin-bottom: 10px;

  color: red;

  text-align: center;

  text-transform: none;
`;

function Form() {
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useAppDispatch();
  const { password, username, userFound, isLoading, isErrorAuth } =
    useAppSelector((state) => state.authorizationReducer);
  const { passwordEntry, usernameEntry } = authorizationSlice.actions;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!username) setUsernameError(true);
    if (!password) setPasswordError(true);

    if (username && password) {
      dispatch(fetchAuthorization({ username, password }));
    }
  };

  const inputPasswordHandler = (value: string) => {
    dispatch(passwordEntry(value));
  };
  const inputUsernameHandler = (value: string) => {
    dispatch(usernameEntry(value));
  };

  const spinner = isLoading ? <Spinner /> : null;
  const errorMessage = isErrorAuth ? <ErrorIndicator /> : null;

  return (
    <StyledForm onSubmit={submitHandler}>
      {spinner}
      {errorMessage}
      <Input
        title={'username'}
        value={username}
        setValue={inputUsernameHandler}
        autoComplete={'username'}
        error={usernameError}
        setError={setUsernameError}
      />
      <Input
        title={'password'}
        type={'password'}
        value={password}
        setValue={inputPasswordHandler}
        autoComplete={'current-password'}
        error={passwordError}
        setError={setPasswordError}
      />
      <StyledError>
        {!userFound ? 'Incorrect username or password' : ''}
      </StyledError>
      <Button type='submit'>Login</Button>
    </StyledForm>
  );
}

export default Form;
