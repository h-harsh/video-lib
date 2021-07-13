import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext";
import { SideBar } from "../SideBar/sideBar";
import './navBar.css'
import { FaBars, FaUserPlus } from 'react-icons/fa'
import { RiLoginBoxFill } from 'react-icons/ri'


export const NavBar = () => {
  const { token, dispatch, logoutHandler } = useAuth();
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
            <li className="nav-itm nav-itm-text right resp-txt">
              <Link to="/login">Login</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-txt">
              <Link to="/signup">Sign up</Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/login"><RiLoginBoxFill/></Link>
            </li>
          ) : null}
          {!token ? (
            <li className="nav-itm nav-itm-text right resp-icon">
              <Link to="/signup"><FaUserPlus /></Link>
            </li>
          ) : null}
          {token ? (
            <li className="nav-itm nav-itm-text right" onClick={() => logoutHandler()}>
              Logout
            </li>
          ) : null}
        </ul>
      </nav>
      <SideBar status={sideBarShow} showSideBar={showSideBar} />
    </>
  );
};

{/* <nav class="topnav">
  <p class="nav-itm nav-itm-text active ">Home</p>
  <p class="nav-itm nav-itm-text">Products</p>

  <p class="nav-itm right ">
    <span>WishList</span> <i class="fas fa-heart"></i>
  </p>
  <p class="nav-itm right ">
    <span>Cart</span> <i class="fas  fa-shopping-cart"></i>
  </p>
  <p class="nav-itm control right" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </p>
</nav> */}
