import React from "react";


function Pilha({img, setTotalPilhas, pilha, setPilhaSelecionada, setImg}) {
  function clicando() {
    setTotalPilhas(num => num - 1);
    setPilhaSelecionada(pilha.toString()); 
    setImg({
      0: [],
      1: [],
      2: []
    });
  };

  return(
  <div onClick={clicando} className={`pile${pile} piles`}>
    {img.length > 0
      ? img.map((image, index) => (
          <img
            key={index}
            alt=""
            src={image}
            style={{
              position: "absolute",
              left: "50%",
              top: "500px"
            }}
          />
      ))
      : null}
  </div>
  );
}

export default Pilha;