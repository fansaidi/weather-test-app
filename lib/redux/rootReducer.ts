/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice, weatherSlice } from './slices'

export const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  weather: weatherSlice.reducer
})

export const reducer = {
  counter: counterSlice.reducer,
  weather: weatherSlice.reducer
}
