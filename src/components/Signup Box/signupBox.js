import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../Contexts/authContext";
import { usePlayList } from "../../Contexts/playListContext";
import { baseurl } from "../../utils/forApi";
import './signupBox.css'

export const SignUpBox = () => {
  const { loginHandler } = useAuth();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUpHandler = async (userName, password, email, loginHandler) => {
      try{
        const response = await axios.post(
            `${baseurl}/user/signup`,
            { name: userName, password, email },
            {
              headers: {
                ContentType: "application/json",
              },
            }
          );
          if(response.status === 200){
              loginHandler(userName, password)
          }
      }catch(error){
          console.log(error.response)
      }
      
  };
  
  return (
    <div className="signup-box">
        <input
        className="signup-item"
        placeholder="UserName"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
        className="signup-item"
        placeholder="Email"
        type="text" onChange={(event) => setEmail(event.target.value)} />
    
        <input
        className="signup-item"
        placeholder="Password"
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        />
    
      <button
      className="signup-item nm-btn2 an"
        onClick={() => signUpHandler(userName, email, password, loginHandler)}
      >
        Sign Up
      </button>
    </div>
  );
};
