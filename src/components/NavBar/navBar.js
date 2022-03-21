import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext";
import { SideBar } from "../SideBar/sideBar";
import './navBar.css'
import { FaBars, FaUserPlus } from 'react-icons/fa'
import { RiLoginBoxFill } from 'react-icons/ri';
import { SecondaryButton, TertiaryButton} from '../../New Components'


export const NavBar = () => {
  const { token, logoutHandler } = useAuth();
  const [sideBarShow, setSideBarShow] = useState(false);
  const showSideBar = () => setSideBarShow(!sideBarShow);

  return (
    <>
      <nav className="top-nav" id="myTopNav">
        <ul>
          <li className="nav-itm nav-itm-text" onClick={showSideBar}>
            <FaBars/>
          </li>
          <li className="nav-itm nav-itm-text">
            <Link to="/">FinTube</Link>
          </li>

          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt new-btns ">
              <Link to="/login"><SecondaryButton text="Login" /></Link>
            </li>
            
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/login"><RiLoginBoxFill/></Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt new-btns">
              <Link to="/signup"><TertiaryButton text="Sign Up"/></Link>
            </li>
          ) : null}
          
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/signup"><FaUserPlus /></Link>
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right new-btns" onClick={() => logoutHandler()}>
              <TertiaryButton text="Logout" />
            </li>
          ) : null}
        </ul>
      </nav>
      <SideBar status={sideBarShow} showSideBar={showSideBar} />
    </>
  );
};


