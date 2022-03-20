import React, { useState, createContext, useContext } from "react"

const CartItemsContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  console.log("cartItems", cartItems)

  const handleAddToCart = product => {
    const updatedCart = [...cartItems]
    const findIndex = updatedCart.findIndex(item => item.id === product.id)

    if (findIndex < 0) {
      //console.log("findindex", findIndex)
      updatedCart.push(product)
    } else {
      const updatedItem = { ...updatedCart[findIndex] }
      //console.log("updatedItem ", updatedItem)
      updatedItem.qty++
      updatedCart[findIndex] = updatedItem
    }

    console.log("updated Cart", updatedCart)
    setCartItems(updatedCart)
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
