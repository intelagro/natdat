import axios from 'axios'
import { DeviceData_I } from '../types/devices.types'
const baseURL = 'https://devices.natdat.mx'

export interface getData_Devices_I {
  deviceId: string
  day: number
  month: number
  year: number
  token: string
}
export const getData = async ({
  deviceId,
  token,
  day,
  month,
  year
}: getData_Devices_I): Promise<DeviceData_I[] | null> => {
  try {
    const rp = await axios({
      baseURL,
      url: `/lamparas?day=${year}-${day}-${month}&id=${deviceId}&fun=day&token=${token}`
    })
    return rp.data.data
  } catch (error) {
    return null
  }
}
