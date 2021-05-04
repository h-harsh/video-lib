import { Link } from 'react-router-dom'
import {RemoveFromPlayListButton} from '../components/playListModal'

export const VideoCard = ({
    videoId,
    title,
    views,
    author,
    authorImg,
    likes,
    thumbnail,
    description,
    remove,
    playlist_name
}) => {
    return (
        <div>
            <div>
                <img src={thumbnail} />
            </div>
            <div>
            <h2>{title}</h2>
            {<Link to={`/${videoId}`}> Play </Link>}
            {remove && <RemoveFromPlayListButton videoId={videoId} playlist_name={playlist_name} />}
            </div>
            
        </div>
    )
}