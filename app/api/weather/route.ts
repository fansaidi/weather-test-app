/* Core */
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: Response) {
  const city = req.nextUrl.searchParams.get('city')
  const result = await fetchWeather(city)

  return NextResponse.json(result)
}

export const fetchWeather = async (
  cityName: string | null
): Promise<WeatherResponse | undefined> => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OW_API_KEY}`
  const response = await fetch(url);
  const result = await response.json();

  if (result.weather && result.weather.length > 0) {
    const weatherInfo = result.weather[0];

    return {
      id: weatherInfo.id,
      main: weatherInfo.main,
      description: weatherInfo.description,
      icon: `https://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`
    }
  }

  return undefined;
}

/* Types */
export interface WeatherResponse {
  id: Number,
  main: String,
  description: String,
  icon: String
}
