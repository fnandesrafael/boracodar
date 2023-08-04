import React from 'react';
import { UploadCard } from '.';
import { FileProps } from '../../context/FilesContext';

import * as S from './styles';

type UploadCardProps = {
  props: {
    data: FileProps;
    index: number;
  };
};

export default function Composition({
  props: { data, index },
}: UploadCardProps) {
  return (
    <UploadCard.Root>
      <S.InfoWrapper>
        <UploadCard.Icon props={{ format: data.type }} />
        <UploadCard.Details props={{ name: data.name, size: data.size }} />
      </S.InfoWrapper>
      <UploadCard.Action props={{ index }} />
    </UploadCard.Root>
  );
}
