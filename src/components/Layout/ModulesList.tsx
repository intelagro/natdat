import { useNavigate } from 'react-router-dom'
import {
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar
} from '@mui/material'
import FluorescentIcon from '@mui/icons-material/Fluorescent'
import { primaryColor } from '../../mui.theme'
import { MODULE_LAMPARAS_PATH } from '../../router/paths'

const ModulesList = (): JSX.Element => {
  const navigate = useNavigate()
  const handleRedirect = (): void => {
    navigate(MODULE_LAMPARAS_PATH)
  }
  return (
    <List>
      <ListItemButton onClick={handleRedirect}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: primaryColor.main }}>
            <FluorescentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lamparas" secondary="Modulo de lamparas" />
      </ListItemButton>
    </List>
  )
}

export default ModulesList
