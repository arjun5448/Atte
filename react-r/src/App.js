
import React from 'react';

import "./App.css";
import Home from './components/Home';
import Log from './components/Log';
import Signup from "./components/Signup"
import Attendence from "./components/Attendence"
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import ShowAttendence from './components/ShowAttendence';
function App() {
 

  return (
   
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/log" element={<Log/>}/>
      <Route path="/sin" element={<Signup/>}/>
      <Route path="/Atte" element={<Attendence/>}/>
      <Route path="/showAttendence" element={<ShowAttendence/>}/>
    </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;