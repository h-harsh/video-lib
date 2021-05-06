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
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
        <Link to={`/${videoId}`} className="video-card" >
            <div>
                <img src={thumbnail} alt="" />
            </div>
            <div>
            <h2 style={{marginLeft: "1rem"}} >{title}</h2>
            <h3 style={{float: 'left', marginLeft: "1rem"}}> >{author}</h3>
            </div>
        </Link>
        <div>
        {remove && <RemoveFromPlayListButton videoId={videoId} playlist_name={playlist_name} />}
        </div>
        </div>
    )
}