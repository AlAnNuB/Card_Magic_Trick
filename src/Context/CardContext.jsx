import React, { createContext, useState, useContext, useEffect } from 'react';

export const CarrinhoContext = createContext();

export const CartProvider = ({ children }) => {
  const [card, setCard] = useState([])

  useEffect(() => {
    if (cardLocal) {
      setCart(JSON.parse(cardLocal))
    }
  }, [])
}