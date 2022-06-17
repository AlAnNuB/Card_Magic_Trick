import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Jogo from './pages/Jogo';
import CardFinal from './pages/CardFinal';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/cardfinal" element={<CardFinal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
