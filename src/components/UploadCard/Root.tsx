import React from 'react';
import { EASE_SWEET } from '../../constants/animations';

import * as S from './styles';

export default function Root({ children }) {
  return (
    <S.RootContainer
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 0.2, ease: EASE_SWEET },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1, ease: EASE_SWEET },
      }}
      exit={{
        scale: 0,
        transition: { duration: 0.2, ease: EASE_SWEET },
      }}
    >
      {children}
    </S.RootContainer>
  );
}
