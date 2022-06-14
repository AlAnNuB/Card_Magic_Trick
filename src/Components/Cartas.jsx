import React, { useEffect, useState } from "react";
import Letreiro from './Letreiro'
import Button from './Button'
import styled from "styled-components";
import axios from "axios";

export default function Cartas() {

  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState('flex');
  const [start, setStart] = useState(false);

function Jogo() {
  const [novoDeck, setNovoDeck] = useState(null);
  const [arrayCartas, setArrayCartas] = useState([]);
  const [imgCartas, setImgCartas] = useState([]);
  const [deck, setDeck] = useState(null);
  const [cardPicked, setCardPicked] = useState(false);

  const URL = "https://deckofcardsapi.com/api/deck";

  useEffect(() => {
    axios
      .get(`${URL}/new/shuffle/`)
      .then(res => {
        setNovoDeck(res.data);
      })
      .catch(err => console.error(err));
  }, [URL]);

  useEffect(() => {
    if (novoDeck) {
      axios
        .get(`${URL}/${novoDeck.deck_id}/draw/?count=21`)
        .then(res => {
          res.data.cards.forEach(element => {
            setArrayCartas(codes => [...codes, element.code]);
            setImgCartas(images => [...images, element.image]);
          });
        })
        .catch(err => console.error(err));
    }
  }, [novoDeck, URL]);

  useEffect(() => {
    if (setArrayCartas.length === 21) {
      axios
        .get(`${URL}/new/shuffle/?cards=${arrayCartas.join(",")}`)
        .then(res => setDeck(res.data))
        .catch(err => console.error(err));
    }
  }, [arrayCartas, URL]);

  useEffect(() => {
    if (deck) {
      axios
        .get(`${URL}/${deck.deck_id}/draw/?count=21`)
        .then(res =>
          axios
            .get(
              `${URL}/${deck.deck_id
              }/pile/total/add/?cards=${res.data.cards
                .map(el => el.code)
                .join(",")}`
            )
            .then()
            .catch(err => console.error(err))
        )
        .catch(err => console.error(err));
    }
  }, [deck, URL]);
}
 useEffect(() => {
    setDisplay((state) => !show ? 'none' : 'flex');
    setStart((state) => !show ? true : false);
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