import React from 'react';

import * as S from './styles';

type InputProps = {
  props: {
    currMessage: string;
    setCurrMessage: React.Dispatch<React.SetStateAction<string>>;
    handleMessageSend: (e: React.MouseEvent | React.KeyboardEvent) => void;
  };
};

export default function Input({
  props: { currMessage, setCurrMessage, handleMessageSend },
}: InputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleMessageSend(e);
    }
  };

  return (
    <S.InputContainer
      type="text"
      placeholder="Digite sua mensagem"
      value={currMessage}
      onChange={({ target: { value } }) => setCurrMessage(value)}
      onKeyDown={handleKeyDown}
    ></S.InputContainer>
  );
}
