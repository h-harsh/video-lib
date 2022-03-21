import "./signupBox.css";
import loginImage from "./signup3.svg";
import logo from "../../logo.png";
import { useState } from "react";
import { useAuth } from "../../Contexts/authContext";
import { PrimaryButton } from "..";
import { signUpHandler } from "../../networking";

const SignUpBox = () => {
  const { loginHandler } = useAuth();

  // const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

 

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="err" />
      </div>

      <div className="login-data-container">
        {/* <h1 className="book-store">Book Store</h1> */}
        <div className=" lgpagelogo-cont">
          <img className="nblogo-img" src={logo} alt="" />
        </div>
        <h4 className="book-tagline">Life is easier if you watch UTube</h4>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Username</p>
            <input
              className="login-input"
              placeholder="UserName (min 3 char)"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Email address</p>
            <input
              className="login-input"
              placeholder="Email"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Password</p>
            <input
              className="login-input"
              placeholder="(8 char,1 number, uppercase and lowercase)"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          
        </div>
        <div className="for-login-btn-cont">
            <PrimaryButton
              text="Register"
              clickHandler={() =>
                signUpHandler(userName, email, password, loginHandler)
              }
            />
          </div>
      </div>
    </div>
  );
};

export default SignUpBox;
