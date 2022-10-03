import { Container, Grid, Card, CardContent } from '@mui/material'
import { useState } from 'react'
import SelectDevice from '../components/Lamparas/SelectDevice'
import Title from '../components/Generic/Title'
import SingleGraph from '../components/Lamparas/SingleGraph'
import DualGraph from '../components/Lamparas/DualGraph'
import Map from '../components/Generic/Map'

const ModuleLamparasView = (): JSX.Element => {
  const [device, setDevice] = useState<string>('')
  const [date, setDate] = useState<string | null>(null)

  const placeHolderData = [
    1, 2, 3, 8, 5, 6, 1, 8, 9, 2, 3, 4, 13, 14, 15, 14, 17, 18, 19, 20, 20, 22,
    18, 17, 14
  ]
  const secPlaceHolderData = [
    0, 3, 4, 1, 5, 6, 10, 12, 3, 5, 6, 7, 6, 5, 4, 3, 2, 1, 8, 10, 12, 13, 13,
    15, 19
  ].reverse()
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
        />
        <Title text="Graficas" variant="h5" />
        <SingleGraph name="Amp led" data={placeHolderData} />
        <SingleGraph name="Amp panel" data={secPlaceHolderData} />
        <DualGraph
          name1="Temp"
          name2="Hr"
          data1={placeHolderData}
          data2={secPlaceHolderData}
        />
        <Grid item xs={12} md={10} lg={4} sx={{ height: '40vh' }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%' }}>
              <Map />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ModuleLamparasView
