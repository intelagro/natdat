import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { theme } from './mui.theme'

import Router from './router'

const App = (): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default App
