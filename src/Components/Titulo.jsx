import React from "react";
import styled from "styled-components";

function Titulo(props) {

  const Titulo = styled.h1`
    font-size: 2em;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    
  `;

  return(
    <Titulo conteudo={props.conteudo} />
  )
}