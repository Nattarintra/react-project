import React, { useEffect, useState, createContext, useContext } from "react"

const APIContext = createContext()

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // Fetching products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const reponse = await fetch("https://fakestoreapi.com/products")
        const data = await reponse.json()
        const newProducts = data.map(product => {
          const qty = (product.qty = 1)
          return { ...product, qty }
        })
        setProducts(newProducts)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return <APIContext.Provider value={{ products, loading, error }}>{children}</APIContext.Provider>
}

export const ProductAPI = () => {
  const context = useContext(APIContext)
  if (context === undefined) {
    throw new Error("Context must be used within a Provider")
  }
  return context
}
