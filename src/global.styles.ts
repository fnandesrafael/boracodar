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
  width: 100%;
`;
