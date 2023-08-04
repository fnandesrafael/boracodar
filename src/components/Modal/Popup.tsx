import React, { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { EASE_SWEET } from '../../constants/animations';

import * as S from './styles';
import { FilesContext } from '../../context/FilesContext';

type PopupProps = {
  props: {
    isOpened: boolean;
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
  children: React.ReactNode;
};

export default function Modal({
  props: { isOpened, setIsOpened },
  children,
}: PopupProps) {
  const { setRejections } = useContext(FilesContext);

  const handlePropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleModalClosing = (e: React.MouseEvent) => {
    e.preventDefault();

    setRejections([]);
    setIsOpened((prevState) => !prevState);
  };

  return (
    isOpened && (
      <S.RootContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleModalClosing}
      >
        <S.PopupContainer
          initial={{ top: '100%' }}
          animate={{
            top: '50%',
            transition: { duration: 0.2, ease: EASE_SWEET },
          }}
          onClick={handlePropagation}
        >
          <S.CloseButton whileTap={{ scale: 0.8 }} onClick={handleModalClosing}>
            <IoMdClose />
          </S.CloseButton>
          {children}
        </S.PopupContainer>
      </S.RootContainer>
    )
  );
}
