
import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <div>
            
            <div className='Homehead'>
                <h1>WELCOME</h1>
                </div>

            <div className='home-a'>
            
                <Link to="/log" className='class-link'>FACULTY_LOGIN</Link>
            
            <Link to="/log"  className='class-link'>STUDENT_LOGIN</Link>
              
            </div>
        </div>
    )
}

export default Home;