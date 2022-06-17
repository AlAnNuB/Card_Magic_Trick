import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
 * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    background: rgb(98,105,159);
    background: linear-gradient(90deg, rgba(98,105,159,1) 0%, rgba(193,199,240,1) 100%);
  }
  body, input{
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    cursor: pointer;
    text-decoration: none;
  }
`;