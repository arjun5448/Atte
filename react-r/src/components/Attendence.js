import React from 'react';
import { Link } from 'react-router-dom';

function Attendence(){
    function retrive(){
        const year=document.getElementById('yr').value;
        let v="20PA1A5448";
        if(year==="I"){
            v="21PA1A5448";
        }
        for(let i=1; i<=30;i++){
            const f=document.createElement('div');
            function check(){
                if(this.style.color=="orange"){
                    this.style.color="green";
                }
                else{
                    this.style.color="orange";
                }

               
            }
            f.onclick=check;
           f.className="bck";
            f.innerText=v;
            document.getElementById('here').appendChild(f);

        }
    }
    return(
    <div>
        <u><h1 id="attendence-heading">
        ATTENDENCE
    </h1></u>
    <div className='h'>
        <Link to="/" className='class-link'>Home</Link>
      </div>
   <div className="Grid">
       
        <label><h2>BRANCH</h2></label><select id="br">
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
  
        <label><h2>YEAR</h2></label><select id="yr">
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
        </div>
        <button className='bu' onClick={retrive}>TAKE ATTENDENCE</button>
        <div id="here">

        </div>
    </div>
)
}
export default Attendence;