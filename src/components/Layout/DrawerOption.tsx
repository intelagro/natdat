import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap
} from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { useNavigate } from 'react-router-dom'

interface props {
  to: string
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
  title: string
  subtitle?: string | null
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DrawerOption = ({
  to: href,
  icon: Icon,
  title,
  subtitle = null,
  setOpen
}: props): JSX.Element => {
  const navigate = useNavigate()
  const handleRedirect = (): void => {
    setOpen(false)
    navigate(href)
  }

  return (
    <ListItem>
      <ListItemButton onClick={handleRedirect}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} secondary={subtitle} />
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerOption
