import styled from 'styled-components';
import { motion } from 'framer-motion';

type IconContainerProps = {
  $format: string;
};

const getColorByFormat = (format: string, is_low_opacity: boolean) => {
  const fullOpacityColors = {
    jpg: '#ed709c',
    jpeg: '#ed709c',
    png: '#49a7f4',
    '*': '#8171ed',
  };

  const lowOpacityColors = {
    jpg: '#F2D9D9',
    jpeg: '#F2D9D9',
    png: '#a9d4fc',
    '*': '#d5c9f2',
  };

  return is_low_opacity ? lowOpacityColors[format] : fullOpacityColors[format];
};

export const RootContainer = styled(motion.div)`
  align-items: center;
  background-color: white;
  border: 2px solid white;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: row;
  gap: 1rem;
  padding: 0.65rem 0.75rem;
  width: 100%;
`;

export const IconContainer = styled.div<IconContainerProps>`
  align-items: center;
  background-color: ${(props) => getColorByFormat(props.$format, true)};
  border-radius: 0.25rem;
  display: flex;
  padding: 0.75rem 0.65rem;

  svg {
    color: ${(props) => getColorByFormat(props.$format, false)};
    font-size: 2rem;
  }
`;

export const InfoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
  gap: 1rem;
  width: 90%;
`;

export const InfoContainer = styled.div`
  @media (width <= 320px) {
    h4 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.75rem !important;
    }
  }

  align-items: start;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;

  h4 {
    color: #575361;
    width: 100%;
    word-break: break-all;
  }

  p {
    color: #857e95;
    font-size: 0.85rem;
    font-weight: 400;
  }
`;

export const ActionButton = styled(motion.button)`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  outline: none;
  width: 2rem;

  svg {
    color: #8b5cf6;
    font-size: 1.5rem;
    text-align: center;

    &:hover {
      color: #ff303e;
    }
  }
`;
