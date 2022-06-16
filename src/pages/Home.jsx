import React from "react";
import Fundo from "../Components/Fundo";
import Button from "../Components/Button";
import { Link } from 'react-router-dom';
import Letreiro from '../Components/Letreiro'

function Home(props) {

  return(
  <Fundo>
      <Letreiro text="Escolha uma carta e selecione em qual piha ela está localizada 3 veses e eu direi qual é a carta que você escolheu." />
      <Link to={'/Jogo'} style={{ textDecoration: 'none' }}>
        <Button text="Vamos Começar ?"/>
      </Link>
  </Fundo>
  );
}

export default Home;