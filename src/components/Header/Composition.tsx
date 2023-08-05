import React from 'react';
import { Header } from '.';

import * as S from './styles';

export default function Composition() {
  return (
    <Header.Root>
      <S.ContactContainer>
        <Header.ContactAvatar
          props={{
            image: 'https://avatars.githubusercontent.com/u/76531786?v=4',
          }}
        />
        <Header.ContactInfo />
      </S.ContactContainer>
      <Header.Action />
    </Header.Root>
  );
}
