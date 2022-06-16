import React, { useState, useEffect } from "react";
import Pilha from "./Pilha";

function TresPilhas({deckID}) {
  const [cartasRestantes, setCartasRestantes] = useState(21);
  const [pilhaSelecionada, setPilhaSelecionada] = useState(null);
  const [totalPilhas, setTotalPilhas] = useState(3);
  const [cartaFinal, setCartaFinal] = useState(null);
  const [img, setImg] = useState({
    0: [],
    1: [],
    2: []
  });

  const corsURL = "https://cors-anywhere.herokuapp.com/";
  const URL = `${corsURL}https://deckofcardsapi.com/api/deck`;

  useEffect(() => {
    if (cartasRestantes > 0 && totalPilhas > 0) {
      fetch(`${URL}/${deckID}/pile/total/draw/?count=21`)
        .then((res) => res.json())
        .then(res => {
          setCartasRestantes(res.data.piles.total.remaining);

          for (let i = 0; i < 3; i++) {
            let cartasParaAdministrar = res.data.cards
              .filter((el, index) => index % 3 === i)
              .map(el => el.code)
              .join(",");
            let imgParaAdministrar = res.data.cards
              .filter((el, index) => index % 3 === i)
              .map(el => el.image);

            fetch(`${URL}/${deckID}/pile/pile${i}/add/?cards=${cartasParaAdministrar}`)
              .then((res) => res.json())
              .then(res => {
                setImg(obj => ({
                  ...obj,
                  [i]: imgParaAdministrar
                }));
              })
              .catch(err => console.error(err));
          }
        })
        .catch(err => console.error(err));
    }
  }, [deckID, cartasRestantes, totalPilhas, URL]);

  useEffect(() => {
    const piles = Object.keys(img);

    if (pilhaSelecionada !== null) {
      fetch(`${URL}/${deckID}/pile/pile${piles.filter(n => n !== pilhaSelecionada)[0]}/draw/?count=7`)
        .then((res) => res.json())
        .then(res =>
         fetch(
              `${URL}/${deckID}/pile/total/add/?cards=${res.data.cards
                .map(el => el.code)
                .join(",")}`
            )
            .then((res) => res.json())
            .then(res =>
              fetch(
                  `${URL}/${deckID}/pile/pile${piles.filter(n => n === pilhaSelecionada)[0]
                  }/draw/bottom/?count=7`
                )
                .then((res) => res.json())
                .then(res =>
                  fetch(
                      `${URL}/${deckID}/pile/total/add/?cards=${res.data.cards
                        .map(el => el.code)
                        .join(",")}`
                    )
                    .then((res) => res.json())
                    .then(res =>
                      fetch(
                          `${URL}/${deckID}/pile/pile${piles.filter(n => n !== pilhaSelecionada).reverse()[0]
                          }/draw/?count=7`
                        )
                        .then((res) => res.json())
                        .then(res =>
                          fetch(
                              `${URL}/${deckID}/pile/total/add/?cards=${res.data.cards
                                .map(el => el.code)
                                .join(",")}`
                            )
                            .then((res) => res.json())
                            .then(res => {
                              setCartasRestantes(res.data.piles.total.remaining);
                              setImg({
                                0: [],
                                1: [],
                                2: []
                              });
                            })
                            .catch(err => console.error(err))
                        )
                        .catch(err => console.error(err))
                    )
                    .catch(err => console.err(err))
                )
                .catch(err => console.error(err))
            )
            .catch(err => console.error(err))
        )
        .catch(err => console.error(err));

      return setPilhaSelecionada(null);
    }
  }, [pilhaSelecionada, URL, deckID, img]);

  useEffect(() => {
    if (totalPilhas === 0 && cartasRestantes === 21) {
      fetch(`${URL}/${deckID}/pile/total/draw/?count=11`)
        .then((res) => res.json())
        .then(res => {
          setCartaFinal(res.data.cards[0].image);
        })
        .catch(err => console.error(err));
    }
  }, [totalPilhas, cartasRestantes, URL, deckID]);

  function ExibindoPilhas() {
    return (
      <>
        {img[2].length > 0 ? (
          <>
            <Pilha
              pilha={0}
              img={img[0]}
              setTotalPilhas={setTotalPilhas}
              setPilhaSelecionada={setPilhaSelecionada}
              setImg={setImg}
            />
            <Pilha
              pilha={1}
              img={img[1]}
              setTotalPilhas={setTotalPilhas}
              setPilhaSelecionada={setPilhaSelecionada}
              setImg={setImg}
            />
            <Pilha
              pilha={2}
              img={img[2]}
              setTotalPilhas={setTotalPilhas}
              setPilhaSelecionada={setPilhaSelecionada}
              setImg={setImg}
            />
          </>
        ) : (
          null
        )}
      </>
    );
  };
  function ExibindoCardFinal() {
    return (
      <>
        <p>Essa é a sua Carta ?</p>
        <img src={cartaFinal} alt="" />
        <p>
          <a href="/">Tentar de novo ?</a>
        </p>
      </>
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      {cartaFinal ? ExibindoCardFinal() : ExibindoPilhas()}
    </div>
  );
}

export default TresPilhas;