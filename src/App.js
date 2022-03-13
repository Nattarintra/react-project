import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import theme from "../src/theme/theme"
import { StylesProvider, ThemeProvider } from "@mui/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ProductView from "views/ProductView/index"
import CartView from "views/CartView"
import { ContextProvider } from "context/Context"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <ContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ProductView />} />
              <Route path="cart" element={<CartView />} />
            </Routes>
          </BrowserRouter>
        </ContextProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
