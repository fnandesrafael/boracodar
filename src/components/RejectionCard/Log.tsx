import React from 'react';

import * as S from './styles';

type LogProps = {
  props: {
    error: {
      code: string;
      message: string;
    };
    file: string;
  };
};

export default function Log({
  props: {
    error: { code, message },
    file,
  },
}: LogProps) {
  return (
    <S.LogContainer>
      <p>
        Encountered error <b>"{code}"</b> in file <b>"{file}"</b>
      </p>
      <p>Error: {message}</p>
    </S.LogContainer>
  );
}
