import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import { data } from 'autoprefixer'

function App() {
  const mockWeatherData = [
    { city: 'New York', temperature: 15, condition: 'Sunny' },
    { city: 'London', temperature: 7, condition: 'Cloudy' },
    { city: 'Mumbai', temperature: 30, condition: 'Humid' },
  ]
  const [count, setCount] = useState(0)

  return (
    <>
      <Card
        city={mockWeatherData[count].city}
        temperature={mockWeatherData[count].temperature}
        condition={mockWeatherData[count].condition}
        mood="Happy"
      
      />
    </>
  )
}

export default App
