import { SwipeableDrawer, Avatar, IconButton } from '@mui/material'
import DrawerList from './DrawerList'
import DrawerOption from './DrawerOption'
import LightIcon from '@mui/icons-material/Light'
import { MODULE_LAMPARAS_PATH } from '../../router/paths'

interface props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Drawer = ({ open, setOpen }: props): JSX.Element => {
  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <IconButton>
        <Avatar
          sx={{ width: 48, height: 48, marginX: 'auto' }}
        >
        </Avatar>
      </IconButton>
      <DrawerList setOpen={setOpen}>
        <DrawerOption
          icon={LightIcon}
          title="Lamparas"
          subtitle="Modulo de lamparas"
          to={MODULE_LAMPARAS_PATH}
          setOpen={setOpen}
        />
      </DrawerList>
    </SwipeableDrawer>
  )
}

export default Drawer
