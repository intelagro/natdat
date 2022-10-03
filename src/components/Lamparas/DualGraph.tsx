import { Grid, Card, CardContent } from '@mui/material'
import { ChartData } from 'chart.js'
import Graph from '../Generic/Graph'
import { hoursLabel } from '../Generic/Graph/labels'
import { primaryColor } from '../../mui.theme'

interface props {
  name1: string
  data1: number[]
  name2: string
  data2: number[]
}
const DualGraph = ({ name1, name2, data1, data2 }: props): JSX.Element => {
  const data: ChartData<'line'> = {
    datasets: [
      {
        label: name1,
        data: data1,
        borderColor: primaryColor.select[800],
        pointBackgroundColor: primaryColor.select[900],
        pointRadius: 2
      },
      {
        label: name2,
        data: data2,
        borderColor: primaryColor.select[400],
        pointBackgroundColor: primaryColor.select[500],
        pointRadius: 2
      }
    ],
    labels: hoursLabel()
  }
  return (
    <Grid item xs={12} md={10} lg={8}>
      <Card>
        <CardContent>
          <Graph data={data} />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default DualGraph
