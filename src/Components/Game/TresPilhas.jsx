import React, { useState, useEffect } from "react";
import axios from "axios";
import Cartas from "../Cartas";
import Button from "../Button";
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

  const URL = "https://deckofcardsapi.com/api/deck";

  useEffect(() => {
    if (cardsRestantes > 0 && totalPilhas > 0) {
      axios
        .get(`${URL}/${deckID}/pile/total/draw/?count=21`)
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

            axios
              .get(
                `${URL}/${deckID}/pile/pile${i}/add/?cards=${cartasParaAdministrar}`
              )
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
      axios
        .get(
          `${URL}/${deckID}/pile/pile${piles.filter(n => n !== pilhaSelecionada)[0]
          }/draw/?count=7`
        )
        .then(res =>
          axios
            .get(
              `${URL}/${deckID}/pile/total/add/?cards=${res.data.cards
                .map(el => el.code)
                .join(",")}`
            )
            .then(res =>
              axios
                .get(
                  `${URL}/${deckID}/pile/pile${piles.filter(n => n === pilhaSelecionada)[0]
                  }/draw/bottom/?count=7`
                )
                .then(res =>
                  axios
                    .get(
                      `${baseURL}/${deckID}/pile/total/add/?cards=${res.data.cards
                        .map(el => el.code)
                        .join(",")}`
                    )
                    .then(res =>
                      axios
                        .get(
                          `${URL}/${deckID}/pile/pile${piles.filter(n => n !== pilhaSelecionada).reverse()[0]
                          }/draw/?count=7`
                        )
                        .then(res =>
                          axios
                            .get(
                              `${URL}/${deckID}/pile/total/add/?cards=${res.data.cards
                                .map(el => el.code)
                                .join(",")}`
                            )
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
  }, [pilhaSelecionada, URL, deckID]);

  useEffect(() => {
    if (totalPilhas === 0 && cartasRestantes === 21) {
      axios
        .get(`${URL}/${deckID}/pile/total/draw/?count=11`)
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
          <Cartas />
        )}
      </>
    );
  };
  function ExibindoCardFinal() {
    return (
      <>
        <p>Essa é a sua Carta ?</p>
        <img src={cartaFinal} alt="" />
        <Button />
      </>
    );
  };

  //If finalCard is set then reveal otherwise show the 3 piles
  return (
    <div style={{ textAlign: "center" }}>
      {cartaFinal ? ExibindoCardFinal() : ExibindoPilhas()}
    </div>
  );
}