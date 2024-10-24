'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


 const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };


  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.testname !== item.testname));
  };

  const isInCart = (item) => cart.some((cartItem) => cartItem.testname === item.testname);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
