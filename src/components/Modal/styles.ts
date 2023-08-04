import styled from 'styled-components';
import { motion } from 'framer-motion';

type ButtonProps = {
  onClick?: (e: React.MouseEvent) => void;
};

export const ErrButton = styled(motion.button)<ButtonProps>`
  background: none;
  border: none;
  display: flex;
  height: 3rem;
  width: 3rem;

  svg {
    color: #ff303e;
    height: 100%;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const RootContainer = styled(motion.div)`
  background-color: #0000002b;
  display: flex;
  height: 100%;
  inset: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const PopupContainer = styled(motion.div)`
  @media (width <= 768px) {
    width: 70%;
  }

  align-items: center;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
  left: 50%;
  max-height: 50%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1.75rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 20;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border: 2px solid white;
    border-radius: 0.5rem;
  }
`;

export const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  display: flex;
  height: 1.5rem;
  margin-right: 0.15rem;
  margin-top: 0.45rem;
  position: absolute;
  right: 0;
  top: 0;
  width: 1.5rem;

  svg {
    color: lightgray;
    font-size: 3rem;
    height: 100%;
    width: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;
