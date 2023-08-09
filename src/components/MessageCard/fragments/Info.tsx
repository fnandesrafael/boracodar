import React from 'react';

import * as S from '../styles';

type InfoProps = {
  children: string[];
};

export default function Info({ children }: InfoProps) {
  return <S.MessageInfoContainer>{children}</S.MessageInfoContainer>;
}
