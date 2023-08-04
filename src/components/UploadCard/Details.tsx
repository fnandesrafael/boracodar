import React from 'react';

import * as S from './styles';

type DetailsProps = {
  props: {
    name: string;
    size: number;
  };
};

export default function Details({ props: { name, size } }: DetailsProps) {
  const handleFileSize = (file_size: number) => {
    const mb = file_size / (1024 * 1024);

    const formattedNumber = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(mb);

    return `${formattedNumber} MB`;
  };

  return (
    <S.InfoContainer>
      <h4>{name}</h4>
      <p>{handleFileSize(size)}</p>
    </S.InfoContainer>
  );
}
