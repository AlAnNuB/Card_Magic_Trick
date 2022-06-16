import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Jogo from './pages/Jogo';
import CardFinal from './pages/CardFinal';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/cardfinal" element={<CardFinal />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
