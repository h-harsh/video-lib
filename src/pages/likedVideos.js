import { HorizontalCard } from "../components/Cards/horizontalCard";
import { useAuth } from "../Contexts/authContext";

export const LikevIdeos = () => {
  const { state, dispatch } = useAuth();
  console.log(state);
  return (
    <div>
      {state?.likedVideos?.map((video) => {
        return <HorizontalCard video={video} />;
      })}
    </div>
  );
};
