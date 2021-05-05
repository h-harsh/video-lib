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
        <div className="video-card">
            <div>
                <img src={thumbnail} alt="" />
            </div>
            <div>
            <h2 style={{marginLeft: "1rem"}} >{title}</h2>
            <h3 style={{float: 'left', marginLeft: "1rem"}}> >{author}</h3>
            {<Link to={`/${videoId}`} className="play-btn" > Watch </Link>}
            {remove && <RemoveFromPlayListButton videoId={videoId} playlist_name={playlist_name} />}
            </div>
            
        </div>
    )
}