import {VideoCard} from '../components/videoCard'
import { useAuth } from '../Contexts/authContext'
import { usePlayList } from '../Contexts/playListContext'
import { addToHistory } from '../utils/history'

export const Home = () => {
    const {allVideosData} = usePlayList()
    const {state, dispatch, token} = useAuth()

    return(<div >
        <div style={{borderBottom: "1px solid black"}}>
            <img className="banner-imgs" 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            />
            <h1 className="banner-text">These days Financial Education is the one, which should be known to each one us, Handeling money is more of a thing than earning money </h1>
        </div>
        <h1>Videos</h1>
        <div className="video-card-cont" >
        { allVideosData ?
        allVideosData.map((item) => (
            <div onClick={() => addToHistory(item , dispatch, token)} >
            <VideoCard {...item} />
            </div>
        )) : <h2>Loading</h2>
        }
        </div>
    </div>)
}


