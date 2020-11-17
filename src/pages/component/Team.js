import React from 'react'
import Engineering from './Engineering'
import Legal from './Legal'
import {Route,Link} from  'react-router-dom';
const Team=({match})=>{
    return(
        <div>
            <h3>Our Teams</h3>
            <p>something something...</p>
            {match.url}
            <ul>
                <li><Link to={match.url+ '/engineering'}>Engineering</Link>
                </li>
                <li><Link to={match.url+ '/legal'}>Legal</Link>
                </li>
            </ul>
            <hr/>
            {/* <Engineering />
            <Legal /> */}
            <Route path={match.url+ '/engineering'} component={Engineering} />
            <Route path={match.url+ '/legal'} component={Legal} />
        </div>
    )
}
export default Team;