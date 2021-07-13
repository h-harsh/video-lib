import { useState } from "react";
import { useAuth } from "../../Contexts/authContext";
import "./loginBox.css";

export const LoginBox = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const { logoutHandler, loginHandler, loginState } = useAuth();

  return (
    <div className="login-box">
      <input
        className="login-item"
        placeholder="Username"
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />

      <input
        className="login-item"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        className="login-item nm-btn2 an"
        onClick={() => loginHandler(userName, password)}
      >
        Login
      </button>
      <h2 className="login-item ">{loginState}</h2>
    </div>
  );
};

{
  /* <div>
      <label>Username</label>
        <input
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        
      <label>Password</label>
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={() => loginHandler(userName, password)}>Login</button>
      <h2>{loginState}</h2>
      <button onClick={logoutHandler}>Log out</button>
    </div> */
}
