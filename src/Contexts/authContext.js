import { createContext, useContext, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const savedToken = JSON.parse(localStorage.getItem("token")) ||  null;
    const [token, setToken] = useState(savedToken)
    const navigate = useNavigate()
    const baseurl = "http://127.0.0.1:8000"
    const [loginState, setLoginState] = useState("")
    
     const logoutHandler = () => {
        localStorage.removeItem("token")
        setToken(null)
        setLoginState("")
    }

    const loginHandler  = async (userName, password) => {
        try{
            const response = await axios.post(`${baseurl}/user/login`,
         {userName, password},
         { headers: {
            "Content-Type" : "application/json" 
         }
        })
        setLoginState(response.data.status)
        if(response.data.status === "login success"){ 
            localStorage.setItem("token", JSON.stringify( response.data.token));
            // localStorage.setItem("login", JSON.stringify({loginStatus: true, token: response.data.token}));
            setToken(response.data.token)
            setLoginState("login success")
            return navigate("/playlist")
        }
        }catch(error){
            console.log(error.response)
            console.log(error.response.data.status)
        }
    }
    return(
        <AuthContext.Provider value={{token, loginState, loginHandler, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}