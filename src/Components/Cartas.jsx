import React, { useEffect, useState } from "react";
import Letreiro from './Letreiro'
import Button from './Button'
import styled from "styled-components";

export default function Cartas() {

  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState('flex');

 useEffect(() => {
    setDisplay((state) => !show ? 'none' : 'flex');
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
      <Letreiro />
      <Button onHide={e => setShow(state => !state)} />
    </BaseDeck>
  );
  
}