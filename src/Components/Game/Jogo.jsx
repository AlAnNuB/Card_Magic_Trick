import React, { useEffect, useState } from "react";
import axios from "axios";
import TresPilhas from './TresPilhas';
import DeckInicial from './DeckInicial'

function Jogo() {
  const [novoDeck, setNovoDeck] = useState(null);
  const [arrayCartas, setArrayCartas] = useState([]);
  const [imgCartas, setImgCartas] = useState([]);
  const [deck, setDeck] = useState(null);
  const [cartaSelecionada, setCartaSelecionada] = useState(false);

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
    if (arrayCartas.length === 21) {
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
            .get(`${URL}/${deck.deck_id}/pile/total/add/?cards=${res.data.cards
                .map(el => el.code)
                .join(",")}`
            )
            .then()
            .catch(err => console.error(err))
        )
        .catch(err => console.error(err));
    }
  }, [deck, URL]);

  return(
    <div>
    {!cartaSelecionada ? (<DeckInicial imgCartas={imgCartas} setCartaSelecionada={setCartaSelecionada} />) : (<TresPilhas deckID={deck.deck_id} />)
    }
    </div>
  );
}

export default Jogo;