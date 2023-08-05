import React from 'react';

import * as S from './styles';

type PhotoProps = {
  props: {
    image: string;
  };
};

export default function ContactAvatar({ props: { image } }: PhotoProps) {
  return <S.AvatarContainer src={image} alt="Contact Profile Picture" />;
}
