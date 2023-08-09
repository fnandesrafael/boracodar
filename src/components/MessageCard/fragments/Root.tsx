import React from 'react';

import * as S from '../styles';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <S.MessageWrapper
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] },
      }}
    >
      {children}
    </S.MessageWrapper>
  );
}
