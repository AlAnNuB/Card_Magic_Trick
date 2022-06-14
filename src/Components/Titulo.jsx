import React from "react";
import styled from "styled-components";

function Titulo(props) {

  const Titulos = styled.h1`
    font-size: 2.5em;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 900;
    color: white;
    width: 100vw;
    height: 10vh;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-bottom: 0.2em;
    @media(max-width: 800px) {
    margin-bottom: 0;
    font-size: 2em;
    }
  `;

  const {text} = props;

  return(
    <Titulos>{text}</Titulos>
  )
}

export default Titulo;