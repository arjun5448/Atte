import React from 'react';

function Signup() {
  return (
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
    <button value="submit" class="btn">SIGN UP</button>

  </div>
   
  )
}

export default Signup;