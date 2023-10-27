import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 no-repeat 70% top;
    --webkit-font-smoothing: antialiased;
  }

  #root, body, html height: 100%; display: flex; justify-content: flex-end; }

  #root {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }

  body, button, textarea, input {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
