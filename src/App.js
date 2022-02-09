import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { createTheme } from "../src/theme"
import { THEMES } from "../src/constants"
import { StylesProvider, ThemeProvider } from "@mui/styles"
//import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import ProductView from "@views/ProductView/index"
import Test from "@components/Test"

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
            <Route path="test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
