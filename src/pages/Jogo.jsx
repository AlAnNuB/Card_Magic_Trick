import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pilha  } from './JogoStyle';
import { Link } from 'react-router-dom';

const baseURL = "https://deckofcardsapi.com/api/";

function Jogo() {
  const [deck, setDeck] = useState(null);
  const [round, setRound] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pegandoDeck = async () => {
      const resp = await baseURL.get('/deck/new/shuffle/?deck_count=1')
      const deckID = resp.data
      await baseURL.get(`/deck/${deckID}/draw/?count=21`).then(response => {
        setDeck(response.data.cards)
      })
    }
    pegandoDeck()
  }, [])

  const setStackInMiddle = (n) => {

    setRound(round + 1)

    const stack1 = deck.slice(0, 7)
    const stack2 = deck.slice(7, 14)
    const stack3 = deck.slice(14, 21)

    setDeck([])

    var deckFinal = []

    if (n === 1) {
      deckFinal = stack2.concat(stack1).concat(stack3)
    }
    if (n === 2) {
      deckFinal = stack1.concat(stack2).concat(stack3)
    }
    if (n === 3) {
      deckFinal = stack1.concat(stack3).concat(stack2)
    }

    if (round !== 3) {

      const stack1 = []
      const stack2 = []
      const stack3 = []

      for (var i = 3; i < deckFinal.length + 1; i = i + 3) {
        stack1.push(deckFinal[i - 3])
        stack2.push(deckFinal[i - 2]) 
        stack3.push(deckFinal[i - 1]) 
      }

      const stackFinal2 = stack1.concat(stack2).concat(stack3)
      setTimeout(() => { setDeck(stackFinal2) }, 2000);
    } else {
      setTimeout(() => { setDeck(deckFinal) }, 2000);
      navigate.push("/Card", {
        card: deckFinal[10]
      });

    } 
  }
  

  return(
    <div>
      <Pilha onClick={() => setStackInMiddle(1)}> 
        {deck && deck.slice(0, 7).map(card => (
          <li key={card.value}>
            {card.image && (
              <img src={card.image} alt={card.value} />
            )}
          </li>
        ))}
      </Pilha>
      <Pilha onClick={() => setStackInMiddle(2)}>
        {deck && deck.slice(7, 14).map(card => (
          <li key={card.value}>
            {card.image && (
              <img src={card.image} alt={card.value} />
            )}
          </li>
        ))}
      </Pilha>
      <Pilha onClick={() => setStackInMiddle(3)}>
        {deck && deck.slice(14, 21).map(card => (
          <li key={card.value}>
            {card.image && (
              <img src={card.image} alt={card.value} />
            )}
          </li>
        ))}
      </Pilha>
    </div>
  );
}

export default Jogo;