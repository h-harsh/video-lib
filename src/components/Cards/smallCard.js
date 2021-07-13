import { Link } from "react-router-dom";
import "./smallCard.css";
import { TiTick } from "react-icons/ti";

export const SmallCard = ({
  videoId,
  title,
  views,
  author,
  authorImg,
  likes,
  thumbnail,
  description,
}) => {
  return (
    <div style={{display: "inline-block"}} >
      <Link to={`/${videoId}`}>
        <div className="small-card">
            <img src={thumbnail} />
            <div className="small-card-data" >
                <img className="authorImg" src={authorImg} />
                <div className="titleAuthor">
                    <p>{title}</p>
                    <p className="author" >{author} <TiTick /> </p>
                </div>
            </div>
        </div>
      </Link>
     </div>
  );
};
