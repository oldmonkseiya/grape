import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';



const SignedInLinks = () => {



    return(
        <ul className="right">
<li><NavLink to='/'>New Post</NavLink></li>
<li><NavLink to='/'>Log Out</NavLink></li>

<li><NavLink to='/' className='btn btn-floating blue lighten-1'>BP</NavLink></li>



        </ul>
    )
}





export default SignedInLinks