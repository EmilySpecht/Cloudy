import { useState, useEffect } from 'react'

function useBrowserGeolocation() {
  const [userLocation, setUserLocation] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      setUserLocation({ latitude, longitude })
    })
  }, [])
  
  return userLocation
}

export default useBrowserGeolocation