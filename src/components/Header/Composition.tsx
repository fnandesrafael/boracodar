import React from 'react';
import { Header } from '.';

import * as S from './styles';

export default function Composition() {
  return (
    <Header.Root>
      <S.ContactContainer>
        <Header.ContactAvatar />
        <Header.ContactInfo />
      </S.ContactContainer>
      <Header.Action />
    </Header.Root>
  );
}
