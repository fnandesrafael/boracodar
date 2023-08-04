import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RootContainer = styled(motion.div)`
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row;
  gap: 0;
  transition: 0.2s;
  width: 100%;

  &:hover {
    background-color: #f9f9f9;
    transition: 0.2s;
  }
`;

export const IconContainer = styled(motion.div)`
  padding: 0.5rem;

  svg {
    color: #ff303e;
    font-size: 1.75rem;
  }
`;

export const LogContainer = styled.div`
  color: #ff303e;
  display: flex;
  flex-flow: column;
  font-size: 0.85rem;
  gap: 0.5rem;
  padding: 0.5rem;
  word-break: break-all;
`;
