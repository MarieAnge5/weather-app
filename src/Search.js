import React , { useState } from "react";
import axios from "axios";
import './App.css';


export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  const [message, setMessage] = useState(""); 

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
     description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3c8fa277b142efb1f38be2fd365120be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    setMessage(`${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search"> 
      <div className="row">
          <div className="col-6">
        {form}
            <h2>{message}</h2>
            </div>
            <div className="col-6">
            <h4>{weather.description}</h4>
            </div>
            </div>
    
          <h3>{Math.round(weather.temperature)}°C | ºF</h3>
          <ul>
          <p>
            <img src={weather.icon} alt="Weather Icon" />
          </p>
            <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{weather.wind}km/hr</li>
        </ul>
        </div>
    );
  } else {
    return form;
  }
}
