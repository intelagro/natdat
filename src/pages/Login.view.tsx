import { Container, Grid } from '@mui/material'
import Login from '../components/Login'

const LoginView = (): JSX.Element => {
  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container>
        <Login />
      </Grid>
    </Container>
  )
}

export default LoginView
