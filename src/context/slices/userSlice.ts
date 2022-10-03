import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserData_I {
  token: string | null
  username: string | null
  name: string | null
  license_id: number | null
}
const initialState: UserData_I = {
  token: null,
  username: null,
  name: null,
  license_id: null
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData_I>) => {
      state.username = action.payload.username
      state.name = action.payload.name
      state.token = action.payload.token
      state.license_id = action.payload.license_id
    }
  }
})

export default UserSlice.reducer
export const { setUser } = UserSlice.actions
