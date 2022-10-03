import { SwipeableDrawer, Avatar } from '@mui/material'
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
      <Avatar
        sx={{ bgcolor: 'primary.main', width: 48, height: 48, marginX: 'auto', marginY: '16px' }}
      >
        L
      </Avatar>
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
