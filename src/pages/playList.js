import { useContext } from 'react'
import {VideoCard} from '../components/videoCard'
import {PlayListContext} from '../playListContext'


export const PlayList = () => {
    const {state, dispatch} = useContext(PlayListContext);

    return (<div>
        <h1>PlayLists</h1>
        {state.map(item => {
            return (<div>
                <h2>{item.playlist_name}</h2>
                {item.videos.map(item2 => {
                    return (<VideoCard {...item2} {...item} remove  />)
                })}
            </div>)
        })}
    </div>)
}

