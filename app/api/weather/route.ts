/* Core */
import { WeatherResponse } from '@/lib/redux/typings'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: Response) {
  const query = req.nextUrl.searchParams.toString()

  const result = await fetchWeather(query)

  return NextResponse.json(result)
}

export const fetchWeather = async (
  queryString: string | null
): Promise<WeatherResponse | unknown> => {

  const url = `https://api.openweathermap.org/data/2.5/weather?${queryString}&appid=${process.env.OW_API_KEY}`
  const response = await fetch(url);
  const result = await response.json();

  if (result.weather && result.weather.length > 0) {
    const weatherInfo = result.weather[0];

    return {
      id: weatherInfo.id,
      main: weatherInfo.main,
      description: weatherInfo.description,
      icon: `https://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`,
      name: result.name,
      lat: result.coord.lat,
      lon: result.coord.lon
    }
  }

  return result;
}