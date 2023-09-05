import React from 'react';
import {Link} from 'react-router-dom';
function ShowAttendence(){
    let check=1;
    function Show(){
    
        if(check===1){const h1=document.createElement("h1");
        h1.innerText="English-76%\nMaths-90%\nSE-80%\nJava-93%";
        document.getElementById("showhere").appendChild(h1);
        check=2;
    }
    
    }
    return (
        <div id="show-Attendence">
            <div className='h'>
        <Link to="/" className='class-link'>Home</Link>
      </div>
            <div class="Show"><button onClick={Show}>checkAttendence
            </button>
            <div id="showhere">

            </div>
            </div>
        </div>
    )
}
export default ShowAttendence;