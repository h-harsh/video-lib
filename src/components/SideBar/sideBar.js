import "./sideBar.css";
import { Link } from "react-router-dom";
import { FaRegWindowClose, FaHistory } from 'react-icons/fa'
import { RiPlayListFill } from 'react-icons/ri'
import { BiLike } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'

export const SideBar = ({ status, showSideBar }) => {
  return (
    <nav className={status ? "nav-menu active" : "nav-menu"}>
      <ul>
        <li onClick={showSideBar}>
            <FaRegWindowClose/>
        </li>
        <li onClick={showSideBar}>
          <Link to="/"> <AiOutlineHome/> Home</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/playlist"> <RiPlayListFill/> PlayLists</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/history"> <FaHistory/> History</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/liked"> <BiLike/> Liked Videos</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/liked"> <BiLike/> Login</Link>
        </li>
        <li onClick={showSideBar}>
          <Link to="/liked"> <BiLike/> Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};
