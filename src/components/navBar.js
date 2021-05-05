import { Route, Routes, Link } from 'react-router-dom'
import { VideoDetails } from '../pages/videoDetails'
import { Home } from '../pages/homePage'
import { PlayList } from '../pages/playList'

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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:videoId" element={<VideoDetails />} />
            <Route path="/playlist" element={<PlayList />} />
        </Routes>
    </>)
}


