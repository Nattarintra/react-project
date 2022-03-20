import React, { useState, createContext, useContext } from "react"

const CartItemsContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  console.log("cartItems", cartItems)

  const handleAddToCart = product => {
    const foundProduct = cartItems.filter(item => item.id === product.id)

    if (foundProduct) {
      foundProduct.product.qty = foundProduct.product.qty + 1 // type err can not read qty
      console.log(foundProduct.product.qty)
      setCartItems([...cartItems, foundProduct])
    } else {
      product.product.qty = product.product.qty + 1
      setCartItems([...cartItems, product])
    }
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
