import { useState } from 'react'
import moment from 'moment'
import { DeviceData_I } from '../types/devices.types'

interface useGraph_I {
  labels: string[]
  ampPanel: number[]
  ampLed: number[]
  temp: number[]
  hr: number[]
  update: Function
  isLoading: boolean
}
const useGraph = (): useGraph_I => {
  type State_I = Omit<useGraph_I, 'update' | 'isLoading'>
  const emptyObject: State_I = {
    labels: [],
    ampPanel: [],
    ampLed: [],
    temp: [],
    hr: []
  }
  const [state, setState] = useState<State_I>(emptyObject)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const setData = (devicesData: DeviceData_I[]): void => {
    devicesData.forEach((data) => {
      setState(
        (prev) =>
          (prev = {
            labels: [
              ...prev.labels,
              moment(data.fecha_de_captura.replace('.000Z', ''), moment.ISO_8601).format('LT')
            ],
            ampLed: [...prev.ampLed, data.amperios_leds],
            ampPanel: [...prev.ampPanel, data.amperios_panel],
            hr: [...prev.hr, data.humedad_relativa],
            temp: [...prev.temp, data.temperatura_ambiente]
          })
      )
    })
  }

  const update = (devicesData: DeviceData_I[]): void => {
    setIsLoading(true)
    setState(emptyObject)
    setData(devicesData)
    setIsLoading(false)
  }

  return {
    labels: state.labels,
    ampLed: state.ampLed,
    ampPanel: state.ampPanel,
    hr: state.hr,
    temp: state.temp,
    update,
    isLoading
  }
}

export default useGraph
