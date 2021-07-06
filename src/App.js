import './App.css';
import {NavBar} from './components/navBar'
import { Route, Routes } from 'react-router-dom'
import { VideoDetails } from './pages/videoDetails'
import { Home } from './pages/homePage'
import { PlayList } from './pages/playList'
import { Login } from './pages/login';
import { SignUp } from './pages/signUp'
import {History} from './pages/history'
import { LikevIdeos } from './pages/likedVideos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={ <Login/> } />
            <Route path="/signup" element={ <SignUp /> } />
            <Route path="/:videoId" element={<VideoDetails />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/history" element={<History />} />
            <Route path="/liked" element={<LikevIdeos />} />
        </Routes>
    </div>
  );
}

export default App;
