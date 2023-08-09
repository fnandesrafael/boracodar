import React from 'react';

import * as S from '../styles';

type RootProps = {
  props: {
    handleMessageSend: (e: React.MouseEvent | React.KeyboardEvent) => void;
  };
  children: React.ReactNode;
};

export default function Root({
  props: { handleMessageSend },
  children,
}: RootProps) {
  return (
    <S.MessageInputWrapper onSubmit={handleMessageSend}>
      {children}
    </S.MessageInputWrapper>
  );
}
