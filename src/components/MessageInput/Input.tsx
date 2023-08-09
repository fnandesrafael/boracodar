import React from 'react';

import * as S from './styles';

type InputProps = {
  props: {
    messageRef: React.MutableRefObject<HTMLInputElement>;
  };
};

export default function Input({ props: { messageRef } }: InputProps) {
  return (
    <S.MessageInputElement
      type="text"
      placeholder="Digite sua mensagem"
      ref={messageRef}
    />
  );
}
