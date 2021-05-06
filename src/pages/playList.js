import { useContext } from 'react'
import { VideoCard } from '../components/videoCard'
import { PlayListContext } from '../playListContext'

export const PlayList = () => {
    const { state, dispatch } = useContext(PlayListContext);

    return (<div>
        <h1 className="page-title" >PlayLists</h1>
        {/* <div  > */}
            {state.map(item => {
                return (
                <div style={{ border: "1px solid black", margin: "1rem", display: 'inline-block' }}>
                    <button className="btn cta"
                        onClick={() => dispatch({ type: "REMOVE_PLAYLIST", payload: item.playlist_name })}>
                    X</button>
                    <h2 className="playlist-name" >{item.playlist_name}</h2>
                    {item.videos.map(item2 => {
                        return (<VideoCard {...item2} {...item} remove />)
                    })}
                </div>)
            })}
        {/* </div> */}
    </div>)
}

