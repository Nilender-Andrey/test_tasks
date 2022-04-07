import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IFlexProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;

  children: ReactNode;
}

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }: IFlexProps) => direction || 'row'};
  align-items: ${({ align }: IFlexProps) => align || 'stretch'};
  justify-content: ${({ justify }: IFlexProps) => justify || 'stretch'};
  margin: ${({ margin }: IFlexProps) => margin || '0'};
  padding: ${({ padding }: IFlexProps) => padding || '0'};
`;

function Flex(props: IFlexProps) {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
}

export default Flex;
