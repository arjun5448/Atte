import React from 'react';
import {Link} from 'react-router-dom';
function Create() {
  return (
    <div>
       <div className='h'>
        <Link to="/" className='class-link'>Home</Link>
      </div>
  
    <div className="set">
        
             
    <div><h2>SIGN UP</h2></div>
    <form method="post">
      <label>
      <i>NAME</i>
    </label>
    <br></br>
    <input type="text" ></input>
    <br></br>
    <label>
      <i>RollNumber</i>
    </label>
    <br></br>
    <input type="text" ></input>
    <br></br>
       <label>
      <i>Create password</i>
    </label>
    <br></br>
    <input type="password" ></input>
    <br></br>
    <label>
      <i>Confirm password</i>
    </label>
    <br></br>
    <input type="password" ></input>

    </form>
    <Link to="/log" className='class-link'>SIGN-UP</Link>

  </div>
  </div>
   
  )
}

export default Create;