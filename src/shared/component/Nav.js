import React from 'react'
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
        <nav>
            <Link to='/'>Home </Link>
        {'|'}
            <Link to='/about'>About Us </Link>
        {'|'}
            <Link to='/team'>Team</Link>
        {'|'}
            <Link to='/articles'>Articles</Link>
        </nav>
    )
}
export default Nav;
