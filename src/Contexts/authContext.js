import { createContext, useContext, useState, useReducer,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { reducerFunc } from "./reducerFunction";
import { baseurl } from "../utils/forApi";
import { toast } from "react-toastify";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const savedToken = JSON.parse(localStorage.getItem("token")) ||  null;
    const [token, setToken] = useState(savedToken)
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState("")

    const [state, dispatch] = useReducer(reducerFunc, {});

    useEffect(() => {
        (async function() {
          const response = await axios.get(`${baseurl}/playlist`, {
            headers: { authorization: token },
          });
          console.log(response)
          if (response.data.status === "success") {
            dispatch({
              type: "INITIAL_LOAD",
              payload: response.data.playlistData,
            });
          }
        })();
      }, [token]);

      useEffect(() => {
        (async function() {
          const response = await axios.get(`${baseurl}/history`, {
            headers: { authorization: token },
          });
          // console.log(response)
          if (response.data.status === "success") {
            dispatch({
              type: "INITIAL_LOAD_HISTORY",
              payload: response.data.history,
            });
          }
        })();
      }, [token]);

      useEffect(() => {
        (async function() {
          const response = await axios.get(`${baseurl}/likedVideos`, {
            headers: { authorization: token },
          });
          console.log(response)
          // console.log(response.data.likedVideos.likedVideos)
          if (response.data.status === "success") {
            dispatch({
              type: "INITIAL_LOAD_LIKED_VIDEOS",
              payload: response.data.likedVideos.likedVideos,
            });
          }
        })();
      }, [token]);


    
     const logoutHandler = () => {
        localStorage.removeItem("token")
        setToken(null)
        setLoginState("")
        dispatch({type: "LOG_OUT"})
    }

    const loginHandler  = async (userName, password) => {
      const toastId = toast.loading("Loggin in");
        try{
            const response = await axios.post(`${baseurl}/user/login`,
         {userName, password},
         { headers: {
            "Content-Type" : "application/json" 
         }
        })
        setLoginState(response.data.status)
        if(response.data.status === "login success"){ 
          toast.update(toastId, {
            render: "You are now Logged in",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
            localStorage.setItem("token", JSON.stringify( response.data.token));
            // localStorage.setItem("login", JSON.stringify({loginStatus: true, token: response.data.token}));
            setToken(response.data.token)
            setLoginState("login success")
            return navigate("/")
        }else{
          toast.update(toastId, {
            render: "Login Error",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
        }
        }catch(error){
          toast.update(toastId, {
            render: "Technical Error, Retry",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
            console.log(error.response)
            // console.log(error.response.data.status)
        }
    }
    return(
        <AuthContext.Provider value={{dispatch, state, token, loginState, loginHandler, logoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}