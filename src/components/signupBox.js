import axios from "axios"
import { useState } from "react"
import { usePlayList } from "../Contexts/playListContext";
import { baseurl } from "../utils/forApi"


export const SignUpBox = () => {
    const {loginHandler} = usePlayList()    

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return(
        <>
            <h1>Sign Up</h1>
            <label> Userame
                <input type="text"  onChange={(event) => setUserName(event.target.value)} />
            </label>
            <label> Email
                <input type="text" onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label> Password
                <input type="text" onChange={(event) => setPassword(event.target.value)} />
            </label>
            <button onClick={() => signUpHandler(userName, email, password, loginHandler)} >Submit</button>
        </>
    )
} 
const signUpHandler = async (userName, password, email, loginHandler) => {
    
    try{
        const response = await axios.post(`${baseurl}/user/signup`,
        {name: userName, password, email},
        {   headers: {
                'ContentType' : 'application/json' 
            }
        })
    console.log(response)
    loginHandler(userName, password)
    }catch(error){
        console.log(error.response)
    }    
}