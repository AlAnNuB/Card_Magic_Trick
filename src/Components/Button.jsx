import React from "react";
import "./Button.css";

function Button(props) {
 
  return(
    <button type="button" className="button-86" role="button" onClick={props.onHide}>Vamos começar</button>
  );
}

export default Button;