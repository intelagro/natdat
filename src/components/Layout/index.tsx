import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Drawer from './Drawer'
import Navbar from './Navbar'

const Layout = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Drawer open={open} setOpen={setOpen} />
      <Outlet />
    </>
  )
}

export default Layout
