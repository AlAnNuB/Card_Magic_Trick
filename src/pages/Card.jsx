import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import { CardSolo } from "./CardStyle";
import { Link } from 'react-router-dom';

const Cards = () => {
const navigate = useNavigate()

  const { card } = ('his', navigate.location.state)

 
  return(
    <CardSolo>
      <h1>A sua carta é</h1>
      {card && (
        <img src={card.image} alt={card.value} />
      )}
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Button text="Tentar Novamente"/>
      </Link>
    </CardSolo>
  );
}

export default Cards;