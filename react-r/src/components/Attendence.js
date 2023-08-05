import React from 'react';
function Attendence(){
    return(
    <div><u><h1 id="attendence-heading">
        ATTENDENCE
    </h1></u>
   <div className="Grid">
       
        <label><h2>BRANCH</h2></label><select id="BRANCEHS">
            <option>AI&ML</option>
            <option>AI&DS</option>
            <option>CSBS</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
            <option>EEE</option>
            <option>CIVIL</option>
            <option>MECH</option>
     
        </select>
  
        <label><h2>YEAR</h2></label><select id="BRANCEHS">
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
        </select>
        <label><h2>SECTION</h2></label>
        <select id="section">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <div></div>
        </div>
        <button className='bu'>TAKE ATTENDENCE</button>
    </div>
)
}
export default Attendence;