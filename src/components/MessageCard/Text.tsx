import React from 'react';

import * as S from './styles';

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return <S.MessageElement>{children}</S.MessageElement>;
}
