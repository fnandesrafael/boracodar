import React from 'react';

import * as S from './styles';

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return <S.TextContainer>{children}</S.TextContainer>;
}
