import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useWeather } from './global';


const api = {
  key: "117f2c5834f00373df4ace679e8aa5a6",
  base: "https://api.openweathermap.org/data/2.5/"
}

const weatherType = {
  "Clouds": faCloud,
  "Rain": faCloudRain
}


function App() {
  const navigate = useNavigate(); // Hook for navigation


  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherBoxFadeOut, setWeatherBoxFadeOut] = useState(false);
  const { setResult } = useWeather(); // Get the setResult function from the context
  const search = evt => {
    if (evt.key === "Enter") {

      setWeatherBoxFadeOut(true);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setWeatherBoxFadeOut(false);
        setQuery('');
      
        setResult(result);
        navigate('/result');

      });
    }
  }



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
    <div className="app warm">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for city"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
            />
        </div>
      </main>
    </div>
  );
}

export default App;
