import React from 'react'
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
        <nav>
            <Link to='/about'>About Us </Link>
        {'|'}
            <Link to='/team'>Team</Link>
        </nav>
    )
}
export default Nav;
