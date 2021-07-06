import {useAuth} from '../Contexts/authContext'
import { clearHistory } from '../utils/history'

export const History = () => {
    const {state, dispatch, token} = useAuth()
    return(
        <>
        <h1>History</h1>
        <button onClick={() => clearHistory(token, dispatch )} >Clear history</button>
        {
            state?.history?.map(item => {
                return(
                    <>
                    <h3>{item.title}</h3>
                    </>
                )
            })
        }
        </>
    )
}