import React from "react";
import Fundo from "../Components/Fundo";
import Button from "../Components/Button";
import { Link } from 'react-router-dom';
import Letreiro from '../Components/Letreiro'

function Home(props) {

  return(
  <Fundo>
      <Letreiro text="Escolha uma carta, selecione em qual pilha ela está localizada 3 vezes e direi, qual foi a carta que você escolheu." />
      <Link to={'/Jogo'} style={{ textDecoration: 'none' }}>
        <Button text="Vamos Começar"/>
      </Link>
  </Fundo>
  );
}

export default Home;