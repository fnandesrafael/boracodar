import styled, { createGlobalStyle } from 'styled-components';

export const Overall = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #1B1924;
  }

  html, body, #root {
    color: white;
    font-family: Roboto, sans-serif;
    height: 100vh;
    width: 100%;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

export const MessageHistoryContainer = styled.div`
  align-items: end;
  display: flex;
  flex-flow: column;
  gap: 1.25rem;
  height: 100%;
  margin: 0 1.25rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
