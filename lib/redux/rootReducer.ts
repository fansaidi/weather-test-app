/* Instruments */
import { counterSlice, weatherSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  weather: weatherSlice.reducer
}
