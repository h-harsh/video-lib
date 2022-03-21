import "./App.css";
import "./common.css";
import { NavBar } from "./components/NavBar/navBar";
import { Route, Routes } from "react-router-dom";
import { VideoDetails } from "./pages/videoDetails";
import { Home } from "./pages/homePage";
import { PlayList } from "./pages/playList";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signUp";
import { History } from "./pages/history";
import { LikevIdeos } from "./pages/likedVideos";
import { PrivateRoute } from "./pages/privateRoute";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:videoId" element={<VideoDetails />} />

        <PrivateRoute path="/playlist" element={<PlayList />} />
        <PrivateRoute path="/history" element={<History />} />
        <PrivateRoute path="/liked" element={<LikevIdeos />} />
      </Routes>
      <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
    </div>
  );
}

export default App;
