import styled from 'styled-components';

export const PageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  gap: 2rem;
  justify-content: center;
  padding: 6rem 0;
  width: 90%;
`;

export const AcceptionsWrapper = styled.div`
  @media (width >= 1024px) {
    width: 45%;
  }

  @media (768px <= width < 1024px) {
    width: 60%;
  }

  align-items: center;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  height: 100%;
  justify-content: space-around;
  padding: 1.5rem 0;
  width: 90%;
`;
