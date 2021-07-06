import { useAuth } from "../../Contexts/authContext";
import { addToLiked, removeFromLiked } from "../../utils/likedVideos";

export const LikeButton = ({ video }) => {
  const { state, dispatch, token } = useAuth();

  console.log(state.likedVideos)
  console.log(video)
  const item = state?.likedVideos?.filter(item => item._id == video._id)
  console.log(item)
  
  return (
    <>
      {item.length > 0  ? (
          <button onClick={() => removeFromLiked(video, token, dispatch)}>
          unLike
        </button>
      ) : (
        <button onClick={() => addToLiked(video, token, dispatch)}>
          Like
        </button>
      )}
    </>
  );
};


