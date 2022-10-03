import axios from 'axios'
import { LoginResponse_I } from '../types/app.types'

const baseURL = process.env.REACT_APP_API

export const LOGIN_USER = async (
  user: string,
  pass: string
): Promise<LoginResponse_I | null> => {
  try {
    const rp = await axios({
      method: 'POST',
      baseURL,
      url: '/login',
      data: {
        user,
        pass
      }
    })
    return rp.data
  } catch (error) {
    return null
  }
}
