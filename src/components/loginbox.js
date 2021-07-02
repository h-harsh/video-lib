import { useState } from "react"
import { useAuth } from "../Contexts/authContext";



export const LoginBox = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("")
    const {logoutHandler, loginHandler, loginState} = useAuth()

    return(
        <>
        <label>Username</label>
        <input type="text" onChange={(event) =>setUserName(event.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(event) =>setPassword(event.target.value)} />

        <button onClick={() => loginHandler(userName, password)} >Login</button>
        <h2>{loginState}</h2>
         <button onClick={logoutHandler} >Log out</button>
        </>
    )
}