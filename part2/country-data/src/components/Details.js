import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Details = ({country}) => {
  const [weather, addWeather] = useState({})
  const api_key = process.env.REACT_APP_API_KEY
  
  useEffect(() => {
    if (typeof api_key === 'undefined' || typeof country === 'undefined') return
    const url = 'http://api.weatherstack.com/current?access_key=' + 
    api_key + '&query=' + country.capital
    console.log(url, 'hi');
    
    axios.get(url)
        .then(response => addWeather(response.data))
  }, [])

  return (
    <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>languages </h3>
        <ul>
            {country.languages.map(language => <li key = {language.iso639_2}>{language.name}</li>)}
        </ul>
        <img src = {country.flag} 
            alt = {"Flag of " + country.name}
            width = {"100px"} />
        { typeof weather.current === 'undefined' ? <div></div> : <div>
        <h3>Weather in {country.capital}</h3>
        <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
        <img src = {weather.current.weather_icons[0]} alt = "capital's weather" />
        <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p> </div>
        }
    </div>
  )
}

export default Details