/* Instruments */
import { locationSlice } from './locationSlice'
import type { ReduxThunkAction } from '@/lib/redux'

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const getCoordinates =
  (): ReduxThunkAction =>
    (dispatch, getState) => {
      const successCallback = (position: GeolocationPosition) => {
        if (position.coords) {
          dispatch(locationSlice.actions.setLocationState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }))
        }
      };

      const errorCallback = (error: GeolocationPositionError) => {
        console.error(error);
      };

      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
