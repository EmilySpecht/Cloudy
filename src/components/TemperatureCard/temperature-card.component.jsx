import React from 'react'
import './temperature-card.css'

export const TemperatureCard = ({ climate }) => {
  let letterColor = ''
  climate = {
    date: '25 de novembro',
    sky: 'cloudy',
    temperature: 25,
    minTemperature: 22,
    maxTemperature: 28,
    wind: 72,
    rain: 22
  }

  if (climate.sky === 'sunny') {
    letterColor = 'letter-sunny'
  } else if (climate.sky === 'cloudy') {
    letterColor = 'letter-cloudy'
  } else if (climate.sky === 'rain') {
    letterColor = 'letter-rain'
  }

  return (
    <div className="temperature-card">
      <div className="date-and-sky">
        <span className="temp-date">{climate.date}</span>
        <span className="temp-sky">{climate.sky}</span>
      </div>
      <div className={`temperature-celsius ${letterColor}`}>
        {climate.temperature}ºC
      </div>
      <div>
        <span>
          {climate.minTemperature} | {climate.maxTemperature}
        </span>
      </div>
      <div className="atmosphere-estimate">
        Vento: {climate.wind} <br />
        Chuva: {climate.rain}
      </div>
    </div>
  )
}
