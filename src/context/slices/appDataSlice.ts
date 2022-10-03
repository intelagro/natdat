import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Catalogos_I } from '../../types/app.types'

export interface GlobalData_I {
  catalogos: null | Catalogos_I
  modulos: null | Object
}

const initialState: GlobalData_I = {
  catalogos: null,
  modulos: null
}

const GlobalDataSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setCatalogos: (state, action: PayloadAction<Catalogos_I | null>) => {
      state.catalogos = action.payload
    },
    setModulos: (state, action: PayloadAction<Object | null>) => {
      state.modulos = action.payload
    }
  }
})

export default GlobalDataSlice.reducer
export const { setCatalogos, setModulos } = GlobalDataSlice.actions
