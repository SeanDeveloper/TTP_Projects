import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'

const api = {
  key: "117f2c5834f00373df4ace679e8aa5a6",
  base: "https://api.openweathermap.org/data/2.5/"
}

const weatherType = {
  "Clouds": faCloud,
  "Rain": faCloudRain
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherBoxFadeOut, setWeatherBoxFadeOut] = useState(false);

  const search = evt => {
    if (evt.key === "Enter") {
      setWeatherBoxFadeOut(true);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setWeatherBoxFadeOut(false);
        setQuery('');
        // console.log(result);
        console.log(weatherType["Clouds"]);
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
    <div className={(typeof weather.main != "undefined")
    ? ((weather.main.temp > 16)
    ? 'app warm'
    : 'app')

    : 'app'}>
      <main>

      {/* <nav>
            <ul>
                <li>Home</li>
                <li>Info</li>
                <li>Contact</li>
            </ul>
        </nav> */}

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
        
        {weather && weather.main && (
          <div className={`weather-box ${weatherBoxFadeOut ? 'fade-out' : 'fade-in'}`}>
            <div className="weather-icon"><FontAwesomeIcon icon={weatherType[weather.weather[0].main]} /></div>
            <div className="location">{weather.name}, {weather.sys && weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
            <div className="tempature">{Math.round(weather.main.temp)}°</div>
            <div className="weather">{weather.weather && weather.weather[0].main}</div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
