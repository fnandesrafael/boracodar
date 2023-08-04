import React, { useContext } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { EASE_SWEET } from '../../constants/animations';
import { FilesContext } from '../../context/FilesContext';

import * as S from './styles';

type ActionProps = {
  props: {
    index: number;
  };
};

export default function Action({ props: { index } }: ActionProps) {
  const { files, setFiles } = useContext(FilesContext);

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();

    const updatedFiles = files.filter((file, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <S.ActionButton
      whileHover={{
        cursor: 'pointer',
        transition: { duration: 0.2, transition: EASE_SWEET },
      }}
      whileTap={{ scale: 0.8 }}
      onClick={handleDelete}
    >
      <RiDeleteBin5Line />
    </S.ActionButton>
  );
}
