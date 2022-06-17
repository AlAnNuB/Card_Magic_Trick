import React from "react";
import { Titulos } from "./TituloStyle";

function Titulo(props) {

  return(
    <Titulos>{props.text}</Titulos>
  )
}

export default Titulo;