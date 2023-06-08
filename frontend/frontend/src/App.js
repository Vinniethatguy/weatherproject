import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';
import Weather from './weather';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/weather/data/64109/')
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
      {location && weatherData.length > 0 && (
        <div>
          <Weather location={location} dayData={weatherData} />
        </div>
      )}
    </div>
  );
}

export default App;
