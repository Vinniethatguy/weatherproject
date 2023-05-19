import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import Weather from './weather';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/test/')
      .then(response => {
        console.log(response.data);
        const { location, days } = response.data.weatherInfo;
        setLocation(location);
        setWeatherData(days);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <br />
      {location && (
        <div>
          <h2>Location: {location}</h2>
          <p>{weatherData[0][1]}</p>
          <p>{weatherData[0][0]}</p>
          <p>{weatherData[0][2]}</p>
          <p>{weatherData[0][3]}</p>
          <Weather data={weatherData} />
        </div>
      )}
    </div>
  );
}

export default App;
