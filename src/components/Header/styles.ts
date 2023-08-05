import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RootContainer = styled.header`
  display: flex;
  flex-flow: row;
  height: 4rem;
  justify-content: space-between;
  padding: 1.25rem;
`;

export const ContactContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
  gap: 1rem;
`;

export const AvatarContainer = styled.img`
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 0.25rem;

  h3 {
    font-size: 1rem;
  }

  p {
    color: #00b37e;
    font-size: 0.75rem;
  }
`;

export const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    color: white !important;
    font-size: 1.35rem;
  }
`;
