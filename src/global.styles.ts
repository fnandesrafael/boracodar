import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: whitesmoke;
  }

  html, body, #root {
    font-family: Inter, sans-serif;
    height: 100vh;
    width: 100%;
  }
`;

export const AppWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
`;

export default GlobalStyles;
