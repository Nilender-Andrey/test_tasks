import React, { FC } from 'react';
import styled from 'styled-components/macro';

type TitleProps = {
  children: React.ReactNode;
  fw?: 200 | 300 | 400 | 500 | 600 | 700;
  fs?: string;
  color?: string;
};

const TitleStyle = styled.h1<TitleProps>`
  padding-bottom: 24px;

  font-weight: ${(props) => props.fw || 400};
  font-family: 'Exo 2.0 Thin';
  font-size: ${(props) => props.fs || '36px'};
  line-height: 44px;
  color: ${(props) => props.color || '#ffffff'};
  text-align: center;
`;

const Title: FC<TitleProps> = (props) => {
  return <TitleStyle {...props} />;
};

export default Title;
