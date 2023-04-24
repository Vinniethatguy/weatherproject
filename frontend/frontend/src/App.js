import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Login from './login'
import Register from './Register';
import UserProfile from './UserProfile';
import Home from './Home';


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
      <Router>
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
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/login' element={< Login />}></Route>
      <Route exact path='/' element={< Register />}></Route>
      <Route exact path='/' element={< UserProfile />}></Route>
      </Routes>
      </Router>

    </div>

  );
}

export default App;