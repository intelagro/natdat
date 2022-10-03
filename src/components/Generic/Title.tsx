import { Grid, Typography } from '@mui/material'
import { TypographyVariant } from '../../types/mui.types'
interface props {
  text: string
  variant: TypographyVariant
}
const Title = ({ text, variant }: props): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Typography variant={variant} color="initial">
        {text}
      </Typography>
    </Grid>
  )
}

export default Title
