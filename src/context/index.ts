import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
// Reducers
import appReducer from './slices/appDataSlice'
import userSlice from './slices/userSlice'

const persistedReducers = combineReducers({
  user: userSlice,
  app_data: appReducer
})
const persistConfig = {
  key: 'devices-app-intelagro-v1',
  storage
}
const persistedReducer = persistReducer(persistConfig, persistedReducers)

export const store = configureStore({
  reducer: {
    root: persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>
