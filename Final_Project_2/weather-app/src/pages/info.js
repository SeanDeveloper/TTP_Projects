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
      <div className="app cold">
        <main>
        <div className="ProjectInfo">
        <p>This project was made possible with ReactJS and OpenWeatherMap API for Tech Talent Pipeline from Sean Cedano with much ♥</p>
        </div>
        </main>
      </div>
    );
}