import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationIcon from '@mui/icons-material/Notifications'

import { Link, useLocation } from 'react-router-dom'
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
          <Typography
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1, textDecoration: 'none' }}
            component={Link}
            to={HOME_PATH}
          >
            NATDAT
          </Typography>
          <IconButton color='inherit'>
            <Badge badgeContent={6} color='secondary'>
              <NotificationIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar sx={{ bgcolor: 'secondary.main' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
