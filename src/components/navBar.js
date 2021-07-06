import {  Link } from 'react-router-dom'
import { useAuth } from '../Contexts/authContext'

export const NavBar = () => {
    const {token, dispatch,logoutHandler } = useAuth()
    return (<>
        <div className="nav-bar">
            <ul className="nav-list">
                 <li className="nav-items"><Link to="/" >Home</Link></li>
                 {!token ? <li className="nav-items"><Link to="/login" >Login</Link></li> : null}
                 { !token ? <li className="nav-items"><Link to="/signup" >Sign up</Link></li> : null}
            </ul>
            <h1 className="main-title">Video Library</h1>
            <ul className="nav-list">
                <li className="nav-items"><Link to="/playlist" >PlayLists</Link></li>
                <li className="nav-items"><Link to="/history" >History</Link></li>
                <li className="nav-items"><Link to="/liked" >Liked Videos</Link></li>
                {token ? <li className="nav-items" onClick={() => logoutHandler()}> Logout</li> : null}

            </ul>
        </div>
    </>)
}


