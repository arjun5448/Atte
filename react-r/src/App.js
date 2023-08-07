
import React, { useState } from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import Log from './components/Log';
import "./App.css";
import ShowAttendence from './components/ShowAttendence';
import Attendenc from './components/Attendence';

function App() {
  const [page, setPage] = useState('home');

  const navigateTo = (destination) => {
    setPage(destination);
  };

  return (
    <div>
      <nav className>
        <ul>
          <li>
            <button onClick={() => navigateTo('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigateTo('attend')}>Attendence</button>
          </li>
          <li>
            <button onClick={() => navigateTo('show')}>Show-Attendence</button>
          </li>
          <li>
            <button onClick={() => navigateTo('log')}>LogIn</button>
          </li>

          <li>
            <button onClick={() => navigateTo('Sign')}>Signin</button>
          </li>
        </ul>
      </nav>

      {page === 'home' && <Home />}
      {page === 'show' && <ShowAttendence />}
      {page === 'log' && <Log />}
      {page === 'attend' && <Attendenc />}
      {page === 'Sign' && <Signup />}
    </div>
  );
}

export default App;