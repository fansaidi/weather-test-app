'use client'

/* Core */
import { useEffect, useState } from 'react'

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectWeather,
  getWeatherAsync,
  selectLocation,
  getCoordinates,
  locationSlice,
} from '@/lib/redux'
import styles from './weather.module.css'

export const Weather = () => {
  const dispatch = useDispatch()
  const weather = useSelector(selectWeather)
  const location = useSelector(selectLocation)
  const [cityName, setCityName] = useState('')

  useEffect(() => {
    dispatch(getCoordinates())
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      dispatch(getWeatherAsync({ lat: location.latitude, lon: location.longitude }))
    }
  }, [location]);

  const onClickHandler = (cityName: string) => {
    dispatch(locationSlice.actions.setLocationState({ lat: 0, lon: 0 }))
    dispatch(getWeatherAsync(cityName))
  }

  let city
  if (weather.name) {
    city = <span className={styles.value}>{weather.name}</span>
  } else {
    city = <span className={styles.value}>City not found</span>
  }

  let coordsText
  if (location.latitude && location.longitude) {
    coordsText = <span>({location.latitude},{location.longitude})</span>
  }

  let weatherIcon
  if (weather.icon) {
    weatherIcon = <img src={weather.icon} className={styles.icon} alt="weather_icon" />
  }

  return (
    <div>
      <div className={styles.container}>
        {city}
        {coordsText}
        {weatherIcon}
        <span className={styles.value}>{weather.main}</span>
        <span>{weather.description}</span>
      </div>
      <div className={styles.controls}>
        <input
          className={styles.textbox}
          aria-label='Search by city name'
          placeholder='Search by city name'
          value={cityName}
          onChange={(e) => setCityName((e.target.value ?? ''))}
        />
        <button
          className={styles.asyncButton}
          onClick={() => onClickHandler(cityName)}
        >
          Check
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(getCoordinates())}
        >
          My location
        </button>
      </div>
    </div>
  )
}
