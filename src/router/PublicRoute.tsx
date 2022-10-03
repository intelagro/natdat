import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../context'
import { LOGIN_PATH } from './paths'

const PrivateRoute = (): JSX.Element => {
  const isAuth = useSelector(
    (state: RootState) => state.root.user.token !== null
  )

  if (!isAuth) return <Navigate to={LOGIN_PATH} />
  return <Outlet />
}

export default PrivateRoute
