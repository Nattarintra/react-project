import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { createTheme } from "../src/theme"
import { THEMES } from "../src/constants"
import { StylesProvider, ThemeProvider } from "@mui/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ProductView from "@views/ProductView/index"
import NavBar from "@components/NavBar"

const App = () => {
  const theme = createTheme({
    theme: THEMES.LIGHT
  })

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductView />} />
            <Route path="test" element={<NavBar />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
