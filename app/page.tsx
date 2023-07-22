/* Components */
import { Counter } from './components/Counter/Counter'
import { Weather } from './components/Weather/Weather'

export default function IndexPage() {
  return <Weather />
}

export const metadata = {
  title: 'Weather Test App',
}
