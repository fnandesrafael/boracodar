import React from 'react';
import { IoMdSend } from 'react-icons/io';

import * as S from '../styles';

type ActionProps = {
  props: {
    handleMessageSend: (e: React.MouseEvent | React.KeyboardEvent) => void;
  };
};

export default function Action({ props: { handleMessageSend } }: ActionProps) {
  return (
    <S.SendButton whileTap={{ scale: 0.9 }} onClick={handleMessageSend}>
      <IoMdSend />
    </S.SendButton>
  );
}
