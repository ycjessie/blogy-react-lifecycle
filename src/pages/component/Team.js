import React from 'react'
import Engineering from './Engineering'
import Legal from './Legal'
import {Route,Link} from  'react-router-dom';
const Team=()=>{
    return(
        <div>
            <h3>Our Teams</h3>
            <p>something something...</p>
            <ul>
                <li><Link to={'/team/engineering'}>Enginnering</Link>
                </li>
                <li><Link to={'/team/legal'}>Legal</Link>
                </li>
            </ul>
            <hr/>
            {/* <Engineering />
            <Legal /> */}
            <Route path={'/team/engineering'} component={Engineering} />
            <Route path={'/team/legal'} component={Legal} />
        </div>
    )
}
export default Team;