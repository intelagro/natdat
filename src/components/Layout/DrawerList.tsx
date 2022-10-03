import { List, Divider } from '@mui/material'
import DrawerOption from './DrawerOption'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import { HOME_PATH, LOGOUT_PATH, SETTINGS_PATH } from '../../router/paths'

interface props {
  children: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DrawerList = ({ children, setOpen }: props): JSX.Element => {
  return (
    <List>
      <DrawerOption
        icon={HomeIcon}
        title="Inicio"
        to={HOME_PATH}
        setOpen={setOpen}
      />
      <Divider />
      {children}
      <Divider />
      <DrawerOption
        icon={SettingsIcon}
        title="Configuración"
        to={SETTINGS_PATH}
        setOpen={setOpen}
      />
      <DrawerOption
        icon={LogoutIcon}
        title="Cerrar sesión"
        to={LOGOUT_PATH}
        setOpen={setOpen}
      />
    </List>
  )
}

export default DrawerList
