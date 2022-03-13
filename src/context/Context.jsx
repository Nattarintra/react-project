import React, { useEffect, useState, createContext, useContext } from "react"
import MainLayout from "@layout/MainLayOut"

const APIContext = createContext()

export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const reponse = await fetch("https://fakestoreapi.com/products")
        const data = await reponse.json()

        setProducts(data)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleAddToCart = product => {
    setCartItems([...cartItems, product])
  }

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>Error fetching data </p>
      </div>
    )
  }

  return <APIContext.Provider value={{ products, cartItems, handleAddToCart }}>{children}</APIContext.Provider>
}

export const ProductAPI = () => {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error("Context must be used within a Provider")
  }
  return context
}
