import { HorizontalCard } from "../components/Cards/horizontalCard";
import { useAuth } from "../Contexts/authContext";

export const LikevIdeos = () => {
  const { state } = useAuth();
  return (
    <div>
      {state?.likedVideos?.map((video) => {
        return <HorizontalCard video={video} />;
      })}
    </div>
  );
};
