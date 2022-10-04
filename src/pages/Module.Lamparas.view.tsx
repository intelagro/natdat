import {
  Container,
  Grid,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material'
import { MouseEventHandler, useEffect, useState } from 'react'
import SelectDevice from '../components/Lamparas/SelectDevice'
import Title from '../components/Generic/Title'
import SingleGraph from '../components/Lamparas/SingleGraph'
import DualGraph from '../components/Lamparas/DualGraph'
import Map from '../components/Generic/Map'
import moment, { Moment } from 'moment'
import { getData, getData_Devices_I } from '../utils/devices.utils'
import { useSelector } from 'react-redux'
import { RootState } from '../context'
import useGraph from '../hooks/useGraph'
import useError from '../hooks/useError'

const ModuleLamparasView = (): JSX.Element => {
  const token = useSelector(
    (state: RootState) => state.root.user.token
  ) as string
  const firstDevice = useSelector(
    (state: RootState) => state.root.app_data.catalogos?.dispositivos[0]
  )
  const [device, setDevice] = useState<string>('')
  const [date, setDate] = useState<Moment | null>(moment())
  const graphData = useGraph()
  const devicesError = useError()
  const dateError = useError()

  useEffect(() => {
    if (firstDevice !== undefined) {
      void (async () => {
        const rq: getData_Devices_I = {
          deviceId: firstDevice.cat_dispositivos_mu_id.toString(),
          token,
          day: moment().date(),
          month: moment().month() + 1,
          year: moment().year()
        }
        const data = await getData(rq)
        if (data !== null) {
          graphData.update(data)
        }
      })()
    }
  }, [])

  const handleSubmit: MouseEventHandler = (): void => {
    if (device === '') {
      devicesError.setError('Error')
      return
    }
    if (date === null) {
      dateError.setError('Error')
      return
    }

    const rq: getData_Devices_I = {
      deviceId: device,
      token,
      day: date.date(),
      month: date.month() + 1,
      year: date.year()
    }

    void (async () => {
      const data = await getData(rq)
      if (data !== null) {
        graphData.update(data)
      }
    })()
  }

  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        marginY={2}
      >
        <Title text="Selecciona dispositivo y fecha" variant="h5" />
        <SelectDevice
          device={device}
          setDevice={setDevice}
          date={date}
          setDate={setDate}
          handleSubmit={handleSubmit}
          dateError={dateError.error}
          deviceError={devicesError.error}
        />
        {
        graphData.isLoading
          ? <CircularProgress sx={{ margin: '32px' }} />
          : <>
              <Title
                text={firstDevice?.descripcion_dispositivo as string}
                variant="h5"
              />
              <SingleGraph
                name="Amperios led"
                data={graphData.ampLed}
                labels={graphData.labels}
              />
              <SingleGraph
                name="Amperios panel"
                data={graphData.ampPanel}
                labels={graphData.labels}
              />
              <DualGraph
                name1="Temperatura ambiente"
                name2="Humedad relativa"
                data1={graphData.temp}
                data2={graphData.hr}
                labels={graphData.labels}
              />
              <Grid item xs={12} md={10} lg={4} sx={{ height: '250px' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ height: '100%' }}>
                    <Map />
                  </CardContent>
                </Card>
              </Grid>
            </>
        }
      </Grid>
    </Container>
  )
}

export default ModuleLamparasView
