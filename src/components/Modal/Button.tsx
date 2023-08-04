import React from 'react';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { EASE_SWEET } from '../../constants/animations';

import * as S from './styles';

type ButtonProps = {
  props: {
    setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function Button({ props: { setIsOpened } }: ButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsOpened((prevState) => !prevState);
  };

  return (
    <S.ErrButton
      key="error-btn"
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 0.2, ease: EASE_SWEET },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
    >
      <BiSolidErrorCircle />
    </S.ErrButton>
  );
}
