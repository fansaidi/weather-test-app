/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { weatherSlice, locationSlice } from './slices'

export const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  location: locationSlice.reducer
})

export const reducer = {
  weather: weatherSlice.reducer
}
