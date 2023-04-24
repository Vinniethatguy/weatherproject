import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as  Link } from 'react-router-dom';


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
      
      <header>
				<nav className='nav'>
					<a className = 'title' href='/'>Weather App</a>
					<div className="header">
						<ul className="nav-items">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/Register">Register</Link>
						</li>
						<li>
							<Link to="/User_profile">User Profile</Link>
						</li>
						</ul>
					</div>
				</nav>
			</header>
    </div>
  );
}

export default App;