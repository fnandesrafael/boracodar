import React, { useContext, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuid } from 'uuid';
import {
  FileProps,
  FilesContext,
  RejectionProps,
} from '../../context/FilesContext';
import { EASE_SWEET } from '../../constants/animations/index';

import * as S from './styles';

type RootProps = {
  children: React.ReactNode;
};

export default function Root({ children }: RootProps) {
  const { setFiles, setRejections } = useContext(FilesContext);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: { 'image/*': [] } });

  useEffect(() => {
    const keyedFiles = acceptedFiles.map((file) =>
      Object.assign(file, { id: uuid() }),
    );

    const rejectedFiles = fileRejections.map((file) =>
      Object.assign(file, { id: uuid() }),
    );

    setFiles((prevState) => [...prevState, ...keyedFiles] as FileProps[]);
    setRejections(
      (prevState) => [...prevState, ...rejectedFiles] as RejectionProps[],
    );
  }, [acceptedFiles, setFiles, fileRejections, setRejections]);

  return (
    <S.DropContainer
      {...getRootProps({
        $isDragAccept: isDragAccept,
        $isDragReject: isDragReject,
      })}
      whileHover={{
        opacity: 0.7,
        transition: { duration: 0.2, ease: EASE_SWEET },
      }}
    >
      <input {...getInputProps()} />
      {children}
    </S.DropContainer>
  );
}
