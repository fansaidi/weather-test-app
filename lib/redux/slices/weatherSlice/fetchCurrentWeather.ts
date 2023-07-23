import { WeatherSliceState } from '@/lib/redux/typings'
import { Coordinates } from '@/lib/redux/typings'
import { useDispatch } from 'react-redux'

export const fetchCurrentWeather = async (
  query: string | Coordinates
): Promise<WeatherSliceState> => {
  let queryString: string
  if (typeof query === "string") {
    queryString = `q=${query}`
  } else {
    queryString = `lat=${query.lat}&lon=${query.lon}`
  }


  const url = `/api/weather?${queryString}`
  const response = await fetch(url)

  const result = await response.json()

  return {
    icon: result.icon,
    main: result.main,
    description: result.description,
    name: result.name,
    lat: result.lat,
    lon: result.lon
  }
}