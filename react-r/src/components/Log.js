
import React from 'react';

function Log() {
  return(

    <div className="set">
    <div><h2>LogIn</h2></div>
    <form method="post">
    <label>
      <i>RollNumber</i>
    </label>
    <input type="text" ></input>
    <br></br>
    <label>
      <i>Password</i>
    </label>
    <br></br>
    <input type="password" ></input>

    </form>
    <button value="submit" className='btn'>Log IN</button>

  </div>
   
)
}

export default Log;
