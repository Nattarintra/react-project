import { BrowserRouter, Routes, Route } from "react-router-dom"
import theme from "../src/theme/theme"
import { StylesProvider, ThemeProvider } from "@mui/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ProductView from "@views/ProductView/index"
import NavBar from "@components/NavBar"
import Test from "@components/Test"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductView />} />
            <Route path="nav" element={<NavBar />} />
            <Route path="test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
