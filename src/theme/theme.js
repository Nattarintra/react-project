import { colors } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import typography from "./typography"
import { CustomShadow } from "./shadows"

const theme = createTheme({
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden"
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)"
      }
    },

    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: "rgba(0, 0, 0, 0.87)"
        }
      }
    }
  },
  palette: {
    action: {
      active: "#44318d"
    },
    background: {
      default: colors.common.white,
      dark: "#f4f6f8",
      paper: colors.common.white
    },
    primary: {
      light: "#755bbe",
      main: "#44318D",
      dark: "#0a095f",
      contrastText: colors.common.white
    },
    secondary: {
      light: "#ffffff",
      main: "#d1d1d1",
      dark: "#a0a0a0",
      contrastText: "#424242"
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  typography,
  shadows: CustomShadow
})

export default theme
