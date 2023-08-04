import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

type DropContainerProps = {
  $isDragAccept: boolean;
  $isDragReject: boolean;
};

export const DropContainer = styled(motion.div)<DropContainerProps>`
  @media (width >= 1024px) {
    width: 45%;
  }

  @media (768px <= width < 1024px) {
    width: 60%;
  }

  @media (width <= 320px) {
    h3,
    svg {
      font-size: 1rem;
    }

    p {
      font-size: 0.75rem !important;
    }
  }

  align-items: center;
  background-color: white;
  border: 2px dashed lightgray;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);
  cursor: pointer;
  display: flex;
  flex-flow: column;
  height: 8rem;
  justify-content: center;
  padding: 2rem 0.75rem;
  text-align: center;
  width: 90%;

  ${(props) =>
    props.$isDragAccept &&
    css`
      border: 2px dashed #32ef71;

      svg,
      h3 {
        color: #32ef71 !important;
      }
    `}

  ${(props) =>
    props.$isDragReject &&
    css`
      border: 2px dashed #ff303e;

      svg,
      h3 {
        color: #ff303e !important;
      }
    `}

  h3 {
    color: #8b5cf6;
  }

  p {
    color: grey;
    font-weight: 300;
  }

  svg {
    color: #8b5cf6;
    font-size: 4em;
  }
`;

export default DropContainer;
