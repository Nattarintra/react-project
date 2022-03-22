import React, { useState, createContext, useContext } from "react"

const CartItemsContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

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

    //console.log("updated Cart", updatedCart)
    setCartItems(updatedCart)
  }

  //INCREASE PRODUCT'S ITEM IN CART
  const handleIncreaseItem = ({ id }) => {
    cartItems.map(item => {
      if (item.id === id) {
        item.qty += 1
      }
      setCartItems([...cartItems])
    })
  }

  //DECREASE PRODUCT'S ITEM IN CART
  const handleDecreaseItem = ({ id }) => {
    cartItems.map(item => {
      if (item.id === id) {
        item.qty -= 1
      }
      setCartItems([...cartItems])
    })
  }

  //REMOVE PRODUCT FROM THE CART
  const handleDeleteItem = ({ id }) => {
    if (window.confirm("Are you sure?")) {
      const deleteItem = cartItems.filter(item => item.id !== id)
      setCartItems(deleteItem)
    }
  }

  return <CartItemsContext.Provider value={{ cartItems, handleAddToCart, handleIncreaseItem, handleDecreaseItem, handleDeleteItem }}>{children}</CartItemsContext.Provider>
}

export const CartItemsContextAPI = () => {
  const cartContext = useContext(CartItemsContext)
  if (cartContext === undefined) {
    throw new Error("CartContext must be used within a Provider")
  }
  return cartContext
}
