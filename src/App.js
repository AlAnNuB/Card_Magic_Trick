import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Jogo from './pages/Jogo';
import Card from './pages/Card';
import StyleGeral from './Components/Style/Styles'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/Jogo" component={Jogo} />
        <Route path="/Cards" component={Card} />
      </Routes>
    </Router>
    <StyleGeral />
    </>
  );
}

export default App;
