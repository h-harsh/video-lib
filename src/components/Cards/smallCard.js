import { Link } from "react-router-dom";
import "./smallCard.css";

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
    <div style={{display: "inline-block"}}  >
      <Link to={`/${videoId}`}>
        <div className="small-card">
            <img src={thumbnail} alt="error loading" />
            <div className="small-card-data" >
                <img className="authorImg" src={authorImg} alt="error-loading" />
                <div className="titleAuthor">
                    <p>{title.slice(0,60)}</p>
                    {/* <p className="author" >{author} <TiTick /> </p> */}
                </div>
            </div>
        </div>
      </Link>
     </div>
  );
};
