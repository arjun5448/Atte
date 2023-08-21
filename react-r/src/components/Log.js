
import React from 'react';

import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Log() {
  const history = useNavigate();

  const handleButtonClick = () => {

    const rol=document.getElementById("rol").value;
    const pas=document.getElementById("pas").value;
    if(rol==="20PA1A5448" && pas==="ai48"){
     history("/Atte")
    }
    else{
      history("/sin");
    }

}
  return(
    <div>
      <div className='h'>
        <Link to="/" className='class-link'>Home</Link>
      </div>
      <div className="set">
    
    <div><h2>LogIn</h2></div>
    <form method="post">
    <label>
      <i>RollNumber</i>
    </label>
    <input type="text"  id='rol'></input>
    <br></br>
    <label>
      <i>Password</i>
    </label>
    <br></br>
    <input type="password" id="pas"></input>


    </form>
    <button onClick={handleButtonClick} id="hr" className='btn'>LogIn</button>
    <br></br>
    <button onClick={handleButtonClick} id="hr" className='btn'>forgoten?</button>

  </div></div>
   
)
}

export default Log;
