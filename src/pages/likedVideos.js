import { useAuth } from "../Contexts/authContext"

export const LikevIdeos = () => {
    const {state, dispatch} = useAuth()
    console.log(state)
    return(
        <>
        <h2>Liked Videos</h2>
        {
            state?.likedVideos?.map(item => {
                return(<div>{item.title}</div>)
            })
        }
        
        </>
    )
}