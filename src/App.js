import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import theme from "../src/theme/theme"
import { StylesProvider, ThemeProvider } from "@mui/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ProductView from "@views/ProductView/index"
import NavBar from "@components/navbar/NavBar"
import Test from "@components/Test"
import CartView from "@views/CartView"
//import data from "@data/products"

const App = () => {
  //const products = data
  const [productsData, setProductsData] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  console.log("my fake pd ", cartItems)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const reponse = await fetch("https://fakestoreapi.com/products")
        const products = await reponse.json()
        setProductsData(products)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="App">
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="App">
        <p>Error fetching data :(</p>
      </div>
    )
  }

  const handleAddToCart = product => {
    setCartItems([...cartItems, product])
  }

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductView cartItems={cartItems} onAddToCart={handleAddToCart} productsData={productsData} />} />
            <Route path="nav" element={<NavBar />} />
            <Route path="test" element={<Test />} />
            <Route path="cart" element={<CartView cartItems={cartItems} onAddToCart={handleAddToCart} />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
