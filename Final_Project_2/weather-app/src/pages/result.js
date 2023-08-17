import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { useWeather } from '../global';
import { Link } from 'react-router-dom';
const api = {
    key: "117f2c5834f00373df4ace679e8aa5a6",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const weatherType = {
    "Clouds": faCloud,
    "Rain": faCloudRain
  }

export default function Result()
{
    
    const { result } = useWeather();
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [weatherBoxFadeOut, setWeatherBoxFadeOut] = useState(false);
    console.log(result)
    const dateBuilder = (d) => {
      let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
    return (
      <div className={(typeof weather.main != "undefined")
      ? ((weather.main.temp > 16)
      ? 'app warm'
      : 'app')
  
      : 'app'}>
        <main>

          {result && result.main && (
            <div className={`weather-box ${weatherBoxFadeOut ? 'fade-out' : 'fade-in'}`}>
              <div className="weather-icon"><FontAwesomeIcon icon={weatherType[result.weather[0].main]} /></div>
              <div className="location">{result.name}, {result.sys && result.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
              <div className="temperature">{Math.round(result.main.temp)}°</div>
              <div className="weather">{result.weather && result.weather[0].main}</div>
              <a className='link'><Link to="/">⬅Search For Another City</Link></a>
            </div>
          )}

          
  
        </main>
      </div>
    );
}