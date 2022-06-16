import React from "react";
import "./ButtonStyle.css";

function Button(props) {
 
  return(
    <button id="botao" type="button" className="button-86" role="button">{props.text}</button>
  );
}

export default Button;