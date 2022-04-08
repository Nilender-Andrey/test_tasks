import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;

  text-transform: capitalize;
`;

const StyledInput = styled.input`
  flex: 1;
  margin-left: 5px;
  padding: 3px 5px;
  width: 100px;

  font-size: 18px;
`;

const StyledError = styled.p`
  width: 100%;
  height: 14px;
  margin-top: 3px;
  padding-left: 20px;

  color: red;
  font-size: 14px;

  text-transform: none;
`;

interface InputProps {
  title: string;
  type?: 'password' | 'text' | 'tel';
  autoComplete: string;
  value: string | undefined;
  setValue: (value: string) => void;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

function Input(props: InputProps) {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setError(false);
    props.setValue(event.target.value);
  };

  const { title, value, type = 'text', autoComplete, error } = props;
  return (
    <StyledLabel>
      {title}:
      <StyledInput
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={changeHandler}
      />
      <StyledError>{error ? `Error! Entery ${title}` : ''}</StyledError>
    </StyledLabel>
  );
}

export default Input;
