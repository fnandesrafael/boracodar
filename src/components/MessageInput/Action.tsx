import React from 'react';
import { IoMdSend } from 'react-icons/io';

import * as S from './styles';

export default function Action() {
  return (
    <S.SendButton whileTap={{ scale: 0.9 }}>
      <IoMdSend />
    </S.SendButton>
  );
}
