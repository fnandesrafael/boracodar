import React from 'react';

import * as S from './styles';

export default function Input() {
  return (
    <S.InputContainer
      type="text"
      placeholder="Digite sua mensagem"
    ></S.InputContainer>
  );
}
