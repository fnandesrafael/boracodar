import React from 'react';
import { VscClose } from 'react-icons/vsc';

import * as S from './styles';

export default function Action() {
  return (
    <S.CloseButton>
      <VscClose />
    </S.CloseButton>
  );
}
