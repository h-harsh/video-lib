import { useAuth } from "../../Contexts/authContext";
import { addToLiked, removeFromLiked } from "../../utils/likedVideos";
import { AiFillLike, AiOutlineLike} from "react-icons/ai";
import './like.css'

export const LikeButton = ({ video }) => {
  const { state, dispatch, token } = useAuth();
  
  const item = state?.likedVideos?.filter(item => item?._id == video?._id)

  return (
    <>
      {item?.length > 0  ? (
          <button className="like-btn" onClick={() => removeFromLiked(video, token, dispatch)}>
          <AiFillLike/>
        </button>
      ) : (
        <button className="like-btn" onClick={() => addToLiked(video, token, dispatch)}>
          <AiOutlineLike/>
        </button>
      )}
    </>
  );
};


