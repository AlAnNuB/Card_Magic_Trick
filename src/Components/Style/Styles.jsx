import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(98,105,159);
    background: linear-gradient(90deg, rgba(98,105,159,1) 0%, rgba(193,199,240,1) 100%);
  }
  button {
    cursor: pointer;
  }
`;