import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GlobalData_I {
  catalogos: null | Object
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
    setCatalogos: (state, action: PayloadAction<Object>) => {
      state.catalogos = action.payload
    },
    setModulos: (state, action: PayloadAction<Object>) => {
      state.modulos = action.payload
    }
  }
})

export default GlobalDataSlice.reducer
export const { setCatalogos, setModulos } = GlobalDataSlice.actions
