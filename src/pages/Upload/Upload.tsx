import React, { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Dropzone from '../../components/Dropzone/Composition';
import UploadCard from '../../components/UploadCard/Composition';
import Modal from './components/Modal/Composition';
import { FilesContext } from '../../context/FilesContext';

import * as S from './styles';

export default function Upload() {
  const { files } = useContext(FilesContext);

  return (
    <S.PageWrapper>
      <Modal />
      <Dropzone />
      <S.AcceptionsWrapper>
        <AnimatePresence>
          {files.map((file, index) => (
            <UploadCard key={file.id} props={{ data: file, index }} />
          ))}
        </AnimatePresence>
      </S.AcceptionsWrapper>
    </S.PageWrapper>
  );
}
