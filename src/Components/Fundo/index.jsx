import React from "react";
import Titulo from '../Titulo'
import {FundoTabuleiro, FundoTabuleiro2, FundoTabuleiro3} from './FundoStyle'

function Fundo({ children }) {
  return (

    <FundoTabuleiro>
      <Titulo text="Truque de Mágica" />
      <FundoTabuleiro2>
        <FundoTabuleiro3>
          { children }
        </FundoTabuleiro3>
      </FundoTabuleiro2>
    </FundoTabuleiro>
  );

}

export default Fundo;