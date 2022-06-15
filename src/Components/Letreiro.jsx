import React from "react";
import styled from "styled-components";

function Letreiro(props) {

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
      <h3>
      {props.text}
      </h3>
    </Conteudo>
  );
}

export default Letreiro;