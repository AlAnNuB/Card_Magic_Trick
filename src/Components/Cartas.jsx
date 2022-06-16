import React, { useEffect, useState } from "react";
import Letreiro from './Letreiro'
import Button from './Button'
import styled from "styled-components";
import Jogo from "./Game/Jogo";

export default function Cartas() {

  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState('flex');
  const [start, setStart] = useState(false);

 useEffect(() => {
    setDisplay((state) => !show ? 'none' : 'flex');
    setStart((state) => !show ? true : false);
  }, [show]);
  useEffect(() => {
    if(!show){
      <Jogo />
    }
  }, [show]);

  const BaseDeck = styled.div`
    width: 90%;
    hight:100%;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: ${display};
    flex-direction: column;
    justify-content: space-between;
  `;

  return(
    <BaseDeck>
      <Letreiro text="Escolha uma carta e selecione em qual piha ela está localizada 3 veses e eu direi qual é a carta que você escolheu." />
      <Button text="Vamos começar" onHide={e => setShow(state => !state)} />
    </BaseDeck>
  );
  
}