import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './weather';


function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  let [changeZip, setZipCode] = useState('64109');
  let [zipCode,buttonZip] = useState("58801");

  


  let handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
    console.log(changeZip)
  };

  let buttonZipChange = (event) =>{
    buttonZip(changeZip)
  }

  let handleSearch = () => {
    axios.get(`http://localhost:4000/weather/data/${zipCode}/`)
      .then(response => {
        console.log(response.data);
        const { location, days } = response.data.weatherInfo;
        setLocation(location);
        setWeatherData(days);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/weather/data/${zipCode}/`)
      .then(response => {
        console.log(response.data);
        const { location, days } = response.data.weatherInfo;
        setLocation(location);
        setWeatherData(days);
      })
      .catch(error => {
        console.log(error);
      });
  }, [zipCode]);

  return (
    <div>
      <br />
      {location && weatherData.length > 0 && (
        <div>
          <Weather location={location} dayData={weatherData} />
        </div>
      )}
      <div>
      
        <input
          type="text"
          placeholder="Change Zip Code"
          value={changeZip}
          onChange={handleZipCodeChange}
          className='search_bar'
        />
        <button onClick={buttonZipChange}></button>
        
      </div>
    </div>
  );
}

export default App;
