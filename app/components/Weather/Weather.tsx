'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
  useSelector,
  useDispatch,
  selectWeather,
  getWeatherAsync,
} from '@/lib/redux'
import styles from './weather.module.css'

export const Weather = () => {
  const dispatch = useDispatch()
  const weather = useSelector(selectWeather)
  const [cityName, setCityName] = useState('')

  return (
    <div>
      <div className={styles.container}>
        <h2>{weather.name}</h2>
        <img src={weather.icon} className={styles.icon} alt="weather_icon" />
        <span className={styles.value}>{weather.main}</span>
        <caption>{weather.description}</caption>
      </div>
      <div className={styles.controls}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={cityName}
          onChange={(e) => setCityName((e.target.value ?? ''))}
        />
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(getWeatherAsync(cityName))}
        >
          Check Weather
        </button>
      </div>
    </div>
  )
}
