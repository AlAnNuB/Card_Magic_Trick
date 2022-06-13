import React from "react";
import styled from 'styled-components';

function Tabuleiro() {

  
  const FundoTabuleiro = styled.div`
  width: 90vw;
  height: 80vh;
  border-radius: 1000px;
  font-size: 1.5em;
  text-align: center;
  background-color: red;
  display: flex;
  flex-direction: column;
  `;

  return(

    <FundoTabuleiro>Seja Bem vindo</FundoTabuleiro>
  );
}

export default Tabuleiro;