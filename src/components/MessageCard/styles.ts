import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RootContainer = styled(motion.div)`
  @media (width > 320px) {
    max-width: 80%;
  }

  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  max-width: 70%;
`;

export const InfoContainer = styled.p`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: end;
`;

export const TextContainer = styled.p`
  background-color: #07847e;
  border-radius: 0.5rem 0.5rem 0;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.875rem;
`;
