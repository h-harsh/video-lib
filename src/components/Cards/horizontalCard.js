import "./horizontalCard.css";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

export const HorizontalCard = ({ video }) => {
  return (
    <>
      <div className="long-card">
        <Link to={`/${video.videoId}`}>
          <img className="thumbnail-long" src={video.thumbnail} />
        </Link>
        <div className="long-card-data">
          <p>{video.title}</p>
          <div className="author-detail-long">
            <img className="authorImg" src={video.authorImg} />
            <p className="author">
              {video.author} <TiTick />{" "}
            </p>
          </div>
          <p className="long-desc" >{video.description}</p>
        </div>
      </div>
    </>
  );
};

