import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Jogo from './pages/Jogo';
import CardFinal from './pages/CardFinal';

function Rotas() {

  const [cartas, setCartas] = useState([])

  function handleSave(cards){
    setCartas(cards)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo" element={<Jogo onAddCart={handleSave} />} />
        <Route path="/cardfinal" element={<CardFinal cartas={cartas} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
