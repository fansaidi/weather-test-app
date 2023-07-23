/* Core */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LocationSliceState } from '@/lib/redux/typings'
import { Coordinates } from '@/lib/redux/typings'

const initialState: LocationSliceState = {
  latitude: undefined,
  longitude: undefined
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLocationState: (state, action: PayloadAction<Coordinates>) => {
      state.latitude = action.payload.lat
      state.longitude = action.payload.lon
    },
  },
})