/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { weatherSlice } from './slices'

export const rootReducer = combineReducers({
  weather: weatherSlice.reducer
})

export const reducer = {
  weather: weatherSlice.reducer
}
