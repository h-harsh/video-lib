import './App.css';
import {NavBar} from './components/navBar'
import { Route, Routes } from 'react-router-dom'
import { VideoDetails } from './pages/videoDetails'
import { Home } from './pages/homePage'
import { PlayList } from './pages/playList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:videoId" element={<VideoDetails />} />
            <Route path="/playlist" element={<PlayList />} />
        </Routes>
    </div>
  );
}

export default App;
