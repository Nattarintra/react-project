import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import theme from "../src/theme/theme"
import { StylesProvider, ThemeProvider } from "@mui/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ProductView from "@views/ProductView/index"
import NavBar from "@components/navbar/NavBar"
import Test from "@components/Test"
import CartView from "@views/CartView"
import data from "@data/products"

const App = () => {
  const products = data
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = product => {
    setCartItems([...cartItems, product])
    console.log("what?  ", product)
  }

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductView cartItems={cartItems} products={products} onAddToCart={handleAddToCart} />} />
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
