import { Link, useParams } from "react-router-dom";
import { data } from '../dataApi/data';
import { Modale } from '../components/playListModal'

export const VideoDetails = () => {
    const { videoId } = useParams();

    function getVideoDetails(videos, videoId) {
        return videos.find((video) => video.videoId === videoId);
    }

    const video = getVideoDetails(data, videoId);

    return (
    <div>
        <div>
        <iframe width="1000" height="500"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
        </div>
        <h2>{video.title}</h2>
        <p>{video.views}</p>
        <p>{video.likes}</p>
        <Modale />
        <h3>{video.author}</h3>
        <img src={video.authorImg} />
        <p>{video.description}</p>
        
    </div>
    )
}
