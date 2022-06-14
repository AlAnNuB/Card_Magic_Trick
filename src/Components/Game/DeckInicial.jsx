import React from "react";
import Cartas from "../Cartas";

function DeckInicial({ imgCartas, setCartaSelecionada }) {
  function Clicando() {
    setCartaSelecionada(true);
  }

  function Mostrar21Cartas() {
    return (
      <>
        <button onClick={Clicando} className="button">
          Ok I'm ready
        </button>
        <div style={{ width: "0" }}>
          {imgCartas.map((image, index) => (
              <img
                className={`image${index}`}
                key={index}
                src={`${image}`}
                alt=""
                style={{
                  position: "absolute",
                  left: "0",
                  top: "70px"
                }}
              />
          ))}
        </div>
      </>
    );
  };

  return (
    <div
      style={{
        position: "relative",
        margin: "0 auto",
        width: "800px",
        textAlign: "center"
      }}
    >
      {imgCartas.length === 21 ? Mostrar21Cartas() : <Cartas />}
    </div>
  );
  
}

export default DeckInicial;