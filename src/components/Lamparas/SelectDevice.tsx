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
import { useSelector } from 'react-redux'
import { RootState } from '../../context'
import { Dispositivos_I } from '../../types/app.types'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

interface props {
  device: number | null
  setDevice: React.Dispatch<React.SetStateAction<number | null>>
  date: AdapterMoment | null
  setDate: React.Dispatch<React.SetStateAction<AdapterMoment | null>>
}
const SelectDevice = ({
  device,
  setDevice,
  date,
  setDate
}: props): JSX.Element => {
  const selectDevicesID = useId()
  const devices = useSelector(
    (state: RootState) =>
      state.root.app_data.catalogos?.dispositivos as Dispositivos_I[]
  )
  return (
    <>
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <FormControl fullWidth>
          <InputLabel id={selectDevicesID}>Dispositivo</InputLabel>
          <Select
            labelId={selectDevicesID}
            value={device}
            label="Dispositivo"
            onChange={(e) => setDevice(e.target.value as number)}
          >
            {devices.map((device) => (
              <MenuItem
                key={device.cat_dispositivos_mu_id}
                value={device.cat_dispositivos_mu_id}
              >
                {device.descripcion_dispositivo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <FormControl fullWidth>
          <DatePicker
            openTo="year"
            views={['year', 'month', 'day']}
            label="Fecha"
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
