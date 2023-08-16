import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const api = {
  key: "117f2c5834f00373df4ace679e8aa5a6",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
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
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for city"/>
        </div>
        
        <div className="location-box">
        <div className="weather-icon"><FontAwesomeIcon icon={faCloud} /></div>
        <div className="location">New York City, US</div>
        <div className="date">{dateBuilder(new Date())}</div>
        </div>


        <div className="weather-box">
          <div className="tempature">
            15°
          </div>
          <div className="weather">Sunny</div>
        </div>

      </main>
    </div>
  );
}

export default App;
