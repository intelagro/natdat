import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { useLocation } from 'react-router-dom'
import { HOME_PATH } from '../../router/paths'

interface props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({ open, setOpen }: props): JSX.Element => {
  const showToggle = useLocation().pathname !== HOME_PATH
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {showToggle && (
            <IconButton
              size="large"
              color="inherit"
              onClick={() => setOpen(!open)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NATDAT
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
