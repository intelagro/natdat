import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../context'
import { DASHBOARD_PATH } from './paths'

const PublicRoute = (): JSX.Element => {
  const isAuth = useSelector(
    (state: RootState) => state.root.user.token !== null
  )

  if (isAuth) return <Navigate to={DASHBOARD_PATH} />
  return <Outlet />
}

export default PublicRoute
