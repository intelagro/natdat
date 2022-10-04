import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar
} from '@mui/material'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useError from '../hooks/useError'
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN_USER } from '../utils/login.utils'
import { DASHBOARD_PATH, RESET_PASS_PATH } from '../router/paths'
import { setCatalogos, setModulos } from '../context/slices/appDataSlice'
import { setUser } from '../context/slices/userSlice'

const Login = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const usernameError = useError()
  const passwordError = useError()
  const generalError = useError()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkNotEmpty = (): boolean => {
    if (username === '') {
      usernameError.setError('Debes rellenar este campo')
      return false
    }
    if (password === '') {
      passwordError.setError('Debes rellenar este campo')
      return false
    }
    return true
  }

  const login = (): void => {
    const notEmpty = checkNotEmpty()
    if (!notEmpty) return
    setIsLoading(true)
    void (async () => {
      const auth = await LOGIN_USER(username, password)
      if (auth === null) {
        setIsLoading(false)
        generalError.setError('Hay un error en las credenciales')
        passwordError.setError('Hay un error en las credenciales')
        return
      }
      dispatch(setCatalogos(auth.catalogos))
      dispatch(setModulos(auth.modulos))
      dispatch(
        setUser({
          token: auth.usuario.token,
          name: auth.usuario.nombre,
          username: auth.usuario.usuario,
          license_id: auth.usuario.cat_usuarios_licencia_id
        })
      )
      navigate(DASHBOARD_PATH)
    })()
  }

  return (
    <Grid item xs={12} sm={7} md={6} lg={5} marginX="auto" marginY={6}>
      <Card onKeyDown={(e) => e.key === 'Enter' && login()}>
        <CardContent>
          <Grid container direction="column" padding={2} gap={2}>
            <Avatar
              sx={{
                margin: 'auto',
                width: 56,
                height: 56,
                bgcolor: 'primary.main'
              }}
            >
              {!isLoading ? 'H' : <CircularProgress color="inherit" />}
            </Avatar>
            <Typography variant="h4" align="center">
              Iniciar sesión
            </Typography>
            <TextField
              label="Nombre de usuario"
              size="small"
              error={usernameError.error || generalError.error}
              helperText={usernameError.error && usernameError.msg}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Contraseña"
              type="password"
              size="small"
              error={passwordError.error || generalError.error}
              helperText={passwordError.error && passwordError.msg}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <CardActions>
            <Button variant="contained" onClick={login}>
              Entrar
            </Button>
            <Button variant="text" component={Link} to={RESET_PASS_PATH}>
              Olvidé mi contraseña
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Login
