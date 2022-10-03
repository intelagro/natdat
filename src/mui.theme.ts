import { createTheme } from '@mui/material/styles'
import { green, grey } from '@mui/material/colors'

export const primaryColor = {
  main: green[600],
  select: green
}
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: green[600]
    },
    background: {
      default: grey[200]
    }
  },
  shape: {
    borderRadius: 16
  }
})
