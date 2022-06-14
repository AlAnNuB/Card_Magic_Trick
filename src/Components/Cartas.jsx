import React from "react";
import Letreiro from './Letreiro'
import Button from './Button'
import styled from "styled-components";

export default function Cartas() {

  const BaseDeck = styled.div`
    width: 90%;
    hight:100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;

  return(
    <BaseDeck>
      <Letreiro />
      <Button />
    </BaseDeck>
  );
  
}