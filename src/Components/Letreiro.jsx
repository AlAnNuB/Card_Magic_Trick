import React from "react";
import { Conteudo } from './LetreiroStyle';

function Letreiro(props) {

  return (
    <Conteudo>
      <h3>
      {props.text}
      </h3>
    </Conteudo>
  );
}

export default Letreiro;