import { createContext, useReducer, useContext, useState, useEffect } from "react";
import {reducerFunc} from './reducerFunction';
import {defaultPlaylist} from './dataApi/data';
import axios from 'axios'
import { useNavigate } from "react-router";

export const PlayListContext = createContext();

export const PlayListProvider = ({children}) => {
    const savedToken = JSON.parse(localStorage.getItem("token")) ||  null;

    const [token, setToken] = useState(savedToken)
    // const [isUserLogin, setLogin] = useState(loginStatus)

    const [loginState, setLoginState] = useState("")

    const[state, dispatch] = useReducer(reducerFunc, defaultPlaylist )
    const navigate = useNavigate()
    const baseurl = "http://127.0.0.1:8000"

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
        console.log(response)
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
        <PlayListContext.Provider value={{state, dispatch, token, loginState, loginHandler, logoutHandler}}>
            {children}
        </PlayListContext.Provider>
    )
}

export const usePlayList = () => {
    return useContext(PlayListContext);
  };

 