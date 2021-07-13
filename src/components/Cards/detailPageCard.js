import { Modale } from "../Playlist Modal/playListModal";
import { LikeButton } from "../Buttons/like";
import './detailPageCard.css'

export const DetailPageCard = ({ video }) => {
  return (
    <div style={{backgroundColor: "whitesmoke"}} >
      <div className="iframe-container" >
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="detail-card-container" >
          <p className="det-card-title" >{video.title}</p>

          <div className="detail-card-sub-container">
            <div>
             <div className="det-card-author-section" >
                <img className="det-card-author-img" src={video.authorImg} />
                <div style={{marginLeft: "1rem"}}>
                  <p>{video.author}</p>
                  <p>24.5k Subscribers</p>
                </div>
             </div>
             
            </div>
            <div className="det-card-btns">
             <Modale/>
             <LikeButton video={video}/>
             <div className="det-card-likes-section">
                <p>{video.views}</p>
                <p>{video.likes} Likes</p>
             </div>
            </div>
            
          </div>

          <div className="det-card-desc" >
            <h3>Description</h3>
            <p>{video.description}</p>
          </div>

      </div>

      
    </div>
  );
};

