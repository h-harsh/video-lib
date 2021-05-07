import {  Link } from 'react-router-dom'

export const NavBar = () => {
    return (<>
        <div className="nav-bar">
            <ul className="nav-list">
                 <li className="nav-items"><Link to="/" >Home</Link></li>
            </ul>
            <h1 className="main-title">Video Library</h1>
            <ul className="nav-list">
                 {/* <li className="nav-items">History</li> */}
                <li className="nav-items"><Link to="/playlist" >PlayLists</Link></li>
            </ul>
        </div>
    </>)
}


