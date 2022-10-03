import { useId } from 'react'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

interface props {
  device: string
  setDevice: React.Dispatch<React.SetStateAction<string>>
  date: string | null
  setDate: React.Dispatch<React.SetStateAction<string | null>>
}
const SelectDevice = ({ device, setDevice, date, setDate }: props): JSX.Element => {
  const selectDevicesID = useId()
  return (
    <>
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <FormControl fullWidth>
          <InputLabel id={selectDevicesID}>Dispositivo</InputLabel>
          <Select
            labelId={selectDevicesID}
            value={device}
            label="Dispositivo"
            onChange={(e) => setDevice(e.target.value)}
          >
            <MenuItem value={10}>Hola</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <FormControl fullWidth>
          <DatePicker
            openTo="year"
            views={['year', 'month', 'day']}
            label="Año, mes y día"
            value={date}
            onChange={(newDate) => {
              setDate(newDate)
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" size="large">
          Enviar
        </Button>
      </Grid>
    </>
  )
}

export default SelectDevice
