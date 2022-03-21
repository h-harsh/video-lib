import "./loginBox.css";
import logo from "../../logo.png";
import loginImage from "./login3.svg";
import { PrimaryButton, SecondaryButton } from "..";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/authContext";

const LoginBox = () => {
  const [userName, setUserName] = useState("h-harsh");
  const [password, setPassword] = useState("harsh");
  const {  loginHandler } = useAuth();

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="res err" />
      </div>

      <div className="login-data-container">
        {/* <h1 className="book-store">Book Store</h1> */}
        <div className=" lgpagelogo-cont">
          <img className="nblogo-img" src={logo} alt="" />
        </div>
        <h4 className="book-tagline" >Life is easier if you watch  UTube</h4>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Username or Email</p>
            <input
              className="login-input"
              placeholder="Username"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Your password</p>
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="for-login-btn-cont">
            <PrimaryButton
              text="Login"
              clickHandler={() => loginHandler(userName, password)}
            />
          </div>
        </div>
        <p style={{textAlign:'center'}} >or</p>
        <Link to="/signup" className="for-signup-btn-cont">
          <SecondaryButton text="Create New account" />
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
