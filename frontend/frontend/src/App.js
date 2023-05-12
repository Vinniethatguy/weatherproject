import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/test/')
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header></Header>
       <ul>
      </ul>
    </div>
  );
}

export default App;