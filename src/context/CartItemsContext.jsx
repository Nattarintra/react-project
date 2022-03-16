import React, { useState, createContext, useContext } from "react"

const CartItemsContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = product => {
    setCartItems([...cartItems, product])
  }

  return <CartItemsContext.Provider value={{ cartItems, handleAddToCart }}>{children}</CartItemsContext.Provider>
}

export const CartItemsContextAPI = () => {
  const cartContext = useContext(CartItemsContext)
  if (cartContext === undefined) {
    throw new Error("CartContext must be used within a Provider")
  }
  return cartContext
}
