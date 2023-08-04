import React from 'react';
import { BiSolidFile, BiSolidFileJpg, BiSolidFilePng } from 'react-icons/bi';

import * as S from './styles';

type IconProps = {
  props: {
    format: string;
  };
};

const iconsByFormat = {
  jpg: <BiSolidFileJpg />,
  jpeg: <BiSolidFileJpg />,
  png: <BiSolidFilePng />,
  '*': <BiSolidFile />,
};

export default function Icon({ props: { format } }: IconProps) {
  const handleFileFormat = (file_format: string) => {
    const fileFormat = file_format.split('image/');
    const formatKey = fileFormat[1];

    return formatKey in iconsByFormat ? formatKey : '*';
  };

  return (
    <>
      <S.IconContainer $format={handleFileFormat(format)}>
        {iconsByFormat[handleFileFormat(format)]}
      </S.IconContainer>
    </>
  );
}
