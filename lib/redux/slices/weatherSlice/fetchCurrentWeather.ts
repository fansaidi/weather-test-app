import { WeatherSliceState, } from "./typings"

export const fetchCurrentWeather = async (
  cityName = ''
): Promise<WeatherSliceState> => {
  const url = `/api/weather?city=${cityName}`
  const response = await fetch(url)

  const result = await response.json()

  return {
    icon: result.icon,
    main: result.main,
    description: result.description,
  }
}
