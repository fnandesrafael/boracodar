import React, { useContext } from 'react';
import { FilesContext } from '../../context/FilesContext';

import * as S from './styles';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  const { rejections } = useContext(FilesContext);

  return (
    <>
      {rejections.length > 0 ? (
        <>{children}</>
      ) : (
        <S.ErrButton>{null}</S.ErrButton>
      )}
    </>
  );
}
