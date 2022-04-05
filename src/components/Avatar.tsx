import React from 'react';
import styled from 'styled-components';
import avatarSvg from '../assets/avatar.svg';

const AvatarWrap = styled.div`
  height: 70px;
  width: 70px;

  border-radius: 50%;

  margin: 0 10px;

  text-align: center;

  @media (max-width: 480px) {
    height: 60px;
    width: 60px;
  }
`;
const AvatarImg = styled.img`
  width: 70%;
`;
const AvatarName = styled.p`
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

interface IAvatar {
  path?: string;
  name: string;
}

function Avatar({ path = avatarSvg, name }: IAvatar) {
  return (
    <AvatarWrap>
      <AvatarImg src={path} alt='Avatar' />
      <AvatarName>{name}</AvatarName>
    </AvatarWrap>
  );
}

export default Avatar;
