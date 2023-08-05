import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RootContainer = styled.footer`
  align-items: center;
  align-self: stretch;
  background: #282843;
  border-radius: 62.4375rem;
  display: flex;
  gap: 0.5rem;
  margin: 1.25rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  padding: 0.875rem 1.5rem;
`;

export const InputContainer = styled.input`
  background: none;
  border: none;
  color: white;
  height: 200%;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #4e4e7a;
  }
`;

export const SendButton = styled(motion.button)`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;

  svg {
    color: white;
    font-size: 1.5rem;
  }
`;
