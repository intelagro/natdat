import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { REDUX_KEY } from '../context'
import { setCatalogos, setModulos } from '../context/slices/appDataSlice'
import { logOutUser } from '../context/slices/userSlice'
import { LOGIN_PATH } from './paths'

const LogoutRoute = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    window.localStorage.removeItem('persist:' + REDUX_KEY)
    dispatch(logOutUser())
    dispatch(setCatalogos(null))
    dispatch(setModulos(null))
  }, [])

  return <Navigate to={LOGIN_PATH} />
}

export default LogoutRoute
