import { Grid, Card, CardContent } from '@mui/material'
import { ChartData } from 'chart.js'
import Graph from '../Generic/Graph'
import { hoursLabel } from '../Generic/Graph/labels'
import { primaryColor } from '../../mui.theme'

interface props {
  name: string
  data: number[]
}
const SingleGraph = ({ name, data: dataToGraph }: props): JSX.Element => {
  const data: ChartData<'line'> = {
    datasets: [
      {
        label: name,
        data: dataToGraph,
        borderColor: primaryColor.select[800],
        pointBackgroundColor: primaryColor.select[900],
        pointRadius: 2
      }
    ],
    labels: hoursLabel()
  }

  return (
    <Grid item xs={12} md={10} lg={6}>
      <Card>
        <CardContent>
          <Graph
            data={data}
          />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SingleGraph
