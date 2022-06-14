import React from "react";
import styled from "styled-components";

function Letreiro() {

  const Conteudo = styled.div`
    font-size: 2em;
    width: 90%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto; 
    margin-right: auto;
    @media(max-width: 800px) {
    font-size: 1em;
    position: relative;
    }
  `;

  return (
    <Conteudo>
      <h3>Escolha uma carta e selecione em qual piha ela está localizada 3 veses e eu direi qual é a carta que você escolheu.</h3>
      <br />
    </Conteudo>
  );
}

export default Letreiro;