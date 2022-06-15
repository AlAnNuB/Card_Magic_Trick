import React from "react";
import "./Button.css";

function Button(props) {
 
  return(
    <button id="botao" type="button" className="button-86" role="button" onClick={props.onHide}>{props.text}</button>
  );
}

export default Button;