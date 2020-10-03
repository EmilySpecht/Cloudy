import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import './styles.css'
import '../../components/TemperatureCard/temperature-card.component'
import { TemperatureCard, LoadingDots } from '../../components'

export default function Main() {
  const [weather, setWeather] = useState()
  const [cityCoords, setCityCoords] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async (coords) => {
      const response = await api.get('/onecall', {
        params: {
          lat: coords.latitude,
          lon: coords.longitude,
          appid: process.env.REACT_APP_API_KEY
        }
      })
      setWeather(response.data)
      setIsLoading(false)
    }

    const getGeolocation = () => {
      console.log('Getting geolocation coords from the browser...')
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords
        const geolocationCoords = { latitude, longitude }
        setCityCoords(geolocationCoords)
        console.log('Coords returned with sucess.')
      })
    }

    !cityCoords ? getGeolocation() : fetchWeather(cityCoords)
  }, [cityCoords])

  useEffect(() => {
    if (weather) {
      console.log('The current weather were sucessfull fetched')
      console.log(weather)
    }
  }, [weather])
  return (
    <div className="section">
      {isLoading ? <LoadingDots /> : <TemperatureCard />}
    </div>
  )
}
