import React, { FC } from 'react';
import styled from 'styled-components/macro';

type TextProps = {
  fs?: string;
  fw?: number;
  ls?: string;
  color?: string;
  mb?: string;
  ta?: string;
  lh?: string;
  children?: React.ReactNode;
};

const TextStyle = styled.p<TextProps>`
  font-size: ${({ fs }) => fs || '14px'};
  font-weight: ${({ fw }) => fw || 400};
  letter-spacing: ${({ ls }) => ls};
  color: ${({ color }) => color || '#666'};
  margin-bottom: ${({ mb }) => mb};
  text-align: ${({ ta }) => ta};
  line-height: ${({ lh }) => lh};
`;

const Text: FC<TextProps> = (props) => {
  return <TextStyle {...props} />;
};

export default Text;
